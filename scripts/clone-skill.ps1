<#
.SYNOPSIS
    지정한 스킬의 GitHub 저장소를 해당 분야/슬러그 폴더 안 ./repo 에 클론합니다.
.EXAMPLE
    .\scripts\clone-skill.ps1 unslop
.EXAMPLE
    .\scripts\clone-skill.ps1 4
#>
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Target
)

$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$ScriptPath = Join-Path $PSScriptRoot "manage_skills.py"
python $ScriptPath clone $Target
exit $LASTEXITCODE
