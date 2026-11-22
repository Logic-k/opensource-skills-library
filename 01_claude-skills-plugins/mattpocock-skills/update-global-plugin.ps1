<#
.SYNOPSIS
    mattpocock/skills 저장소를 최신 상태로 업데이트하고 Antigravity 전역 플러그인 폴더에 동기화합니다.
.EXAMPLE
    .\01_claude-skills-plugins\mattpocock-skills\update-global-plugin.ps1
.EXAMPLE
    .\01_claude-skills-plugins\mattpocock-skills\update-global-plugin.ps1 -SkipPull
#>
param(
    [switch]$SkipPull
)

$ErrorActionPreference = "Stop"
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$RepoDir = Join-Path $PSScriptRoot "repo"
$PluginDir = Join-Path $env:USERPROFILE ".gemini\config\plugins\mattpocock-skills"
$SkillsDest = Join-Path $PluginDir "skills"

if (-not (Test-Path $RepoDir)) {
    throw "클론된 저장소를 찾을 수 없습니다: $RepoDir"
}

if (-not $SkipPull) {
    Write-Host "[1/3] GitHub 저장소 최신 커밋 가져오는 중 (git pull)..." -ForegroundColor Cyan
    git -C $RepoDir pull --ff-only
} else {
    Write-Host "[1/3] git pull 건너뛰기 (-SkipPull)" -ForegroundColor DarkGray
}

$UpstreamManifestPath = Join-Path $RepoDir ".claude-plugin\plugin.json"
$UpstreamManifest = Get-Content -Path $UpstreamManifestPath -Raw -Encoding UTF8 | ConvertFrom-Json

Write-Host "[2/3] 전역 플러그인 스킬 디렉터리 동기화 중 ($SkillsDest)..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path $SkillsDest | Out-Null

# Remove stale skills no longer in upstream manifest
$ExpectedNames = @($UpstreamManifest.skills | ForEach-Object { Split-Path $_ -Leaf })
Get-ChildItem -Path $SkillsDest -Directory -ErrorAction SilentlyContinue | ForEach-Object {
    if ($_.Name -notin $ExpectedNames) {
        Remove-Item -Path $_.FullName -Recurse -Force
    }
}

$CopiedCount = 0
foreach ($RelSkillPath in $UpstreamManifest.skills) {
    $CleanRel = ($RelSkillPath -replace '^\./', '') -replace '/', '\'
    $SrcDir = Join-Path $RepoDir $CleanRel
    if (-not (Test-Path (Join-Path $SrcDir "SKILL.md"))) {
        throw "SKILL.md 누락: $SrcDir"
    }
    $SkillName = Split-Path $SrcDir -Leaf
    $DestDir = Join-Path $SkillsDest $SkillName
    if (Test-Path $DestDir) {
        Remove-Item -Path $DestDir -Recurse -Force
    }
    Copy-Item -Path $SrcDir -Destination $DestDir -Recurse -Force
    $CopiedCount++
}

# Sync README.md, LICENSE, and version in plugin.json
foreach ($DocName in @("README.md", "LICENSE")) {
    $DocSrc = Join-Path $RepoDir $DocName
    if (Test-Path $DocSrc) {
        Copy-Item -Path $DocSrc -Destination (Join-Path $PluginDir $DocName) -Force
    }
}

$LocalManifestPath = Join-Path $PluginDir "plugin.json"
if (Test-Path $LocalManifestPath) {
    $LocalManifest = Get-Content -Path $LocalManifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
    $LocalManifest.version = $UpstreamManifest.version
    $LocalManifest | ConvertTo-Json -Depth 5 | Set-Content -Path $LocalManifestPath -Encoding UTF8
}

Write-Host "[3/3] 완료! 총 $CopiedCount 개 스킬을 전역 플러그인($PluginDir)에 반영했습니다 (v$($UpstreamManifest.version))." -ForegroundColor Green
