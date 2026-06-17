$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$inbox = Join-Path $repoRoot "research\inbox"
New-Item -ItemType Directory -Force -Path $inbox | Out-Null

$downloads = Join-Path $env:USERPROFILE "Downloads"
$latest = Get-ChildItem -Path $downloads -Filter "friendsay-capture-*.json" -File |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1

if (-not $latest) {
  throw "No friendsay-capture-*.json file found in Downloads."
}

$dest = Join-Path $inbox $latest.Name
Copy-Item -LiteralPath $latest.FullName -Destination $dest -Force

Write-Host "Imported latest marketplace capture:"
Write-Host $dest
