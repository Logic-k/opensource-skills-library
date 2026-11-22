<#
.SYNOPSIS
    catalog/skills.json을 기반으로 모든 SKILL.md 카드와 README.md 목차를 재동기화합니다.
#>
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$ScriptPath = Join-Path $PSScriptRoot "manage_skills.py"
python $ScriptPath sync
exit $LASTEXITCODE
