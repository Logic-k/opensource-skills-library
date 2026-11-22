<#
.SYNOPSIS
    오픈소스 서재 웹앱을 로컬 서버로 실행하고 브라우저를 엽니다.
    웹에서 추가/수정/삭제한 내용은 d:\Skills\catalog\skills.json 및 모든 SKILL.md, README.md에 실시간 반영됩니다.
.EXAMPLE
    .\scripts\start-web.ps1
.EXAMPLE
    .\scripts\start-web.ps1 -Port 9000
#>
param(
    [int]$Port = 8765,
    [switch]$NoOpen
)

$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$ServerScript = Join-Path $PSScriptRoot "serve_web.py"
$ArgsList = @($ServerScript, "--port", $Port)
if (-not $NoOpen) {
    $ArgsList += "--open"
}

python @ArgsList
exit $LASTEXITCODE
