<#
.SYNOPSIS
    서재에 등록된 오픈소스 스킬을 키워드, 분야, 태그, 상태로 검색합니다.
.EXAMPLE
    .\scripts\search-skill.ps1 보안
.EXAMPLE
    .\scripts\search-skill.ps1 "" -Category 01 -Tag 디자인
#>
param(
    [Parameter(Position = 0)]
    [string]$Query = "",

    [string]$Category = "",
    [string]$Tag = "",
    [string]$Status = ""
)

$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$ScriptPath = Join-Path $PSScriptRoot "manage_skills.py"
$ArgsList = @($ScriptPath, "search", $Query)

if ($Category) { $ArgsList += @("--category", $Category) }
if ($Tag)      { $ArgsList += @("--tag", $Tag) }
if ($Status)   { $ArgsList += @("--status", $Status) }

python @ArgsList
exit $LASTEXITCODE
