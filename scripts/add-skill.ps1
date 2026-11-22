<#
.SYNOPSIS
    새 GitHub 오픈소스 스킬을 서재(catalog/skills.json)에 추가하고 SKILL.md 및 목차를 자동 생성합니다.
.EXAMPLE
    .\scripts\add-skill.ps1 https://github.com/owner/repo -Category 01_claude-skills-plugins -Genre "Claude Code 스킬" -Memo "인스타 릴 추천"
.EXAMPLE
    .\scripts\add-skill.ps1 owner/repo -Category 03 -Clone
#>
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Repo,

    [string]$Category = "",
    [string]$Name = "",
    [string]$Slug = "",
    [string]$Genre = "",
    [string]$Description = "",
    [string]$UseWhen = "",
    [string]$Tags = "",
    [string]$Memo = "",
    [string]$Usage = "",
    [string]$Status = "보고 싶음",
    [switch]$Clone,
    [switch]$NoFetch,
    [switch]$Update
)

$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$ScriptPath = Join-Path $PSScriptRoot "manage_skills.py"
$ArgsList = @($ScriptPath, "add", $Repo)

if ($Category)    { $ArgsList += @("--category", $Category) }
if ($Name)        { $ArgsList += @("--name", $Name) }
if ($Slug)        { $ArgsList += @("--slug", $Slug) }
if ($Genre)       { $ArgsList += @("--genre", $Genre) }
if ($Description) { $ArgsList += @("--description", $Description) }
if ($UseWhen)     { $ArgsList += @("--use-when", $UseWhen) }
if ($Tags)        { $ArgsList += @("--tags", $Tags) }
if ($Memo)        { $ArgsList += @("--memo", $Memo) }
if ($Usage)       { $ArgsList += @("--usage", $Usage) }
if ($Status)      { $ArgsList += @("--status", $Status) }
if ($Clone)       { $ArgsList += "--clone" }
if ($NoFetch)     { $ArgsList += "--no-fetch" }
if ($Update)      { $ArgsList += "--update" }

python @ArgsList
exit $LASTEXITCODE
