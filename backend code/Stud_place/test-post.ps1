# Test POST API
$headers = @{
    "Content-Type" = "application/json"
}

$body = @{
    name = "Test Student"
    department = "Computer Science"
    company = "Google"
    lpa = 25.5
} | ConvertTo-Json

Write-Host "Testing POST to backend..." -ForegroundColor Green
Write-Host "Body: $body" -ForegroundColor Yellow

try {
    $response = Invoke-RestMethod -Uri "http://localhost:8081/api/placements" -Method Post -Headers $headers -Body $body
    Write-Host "SUCCESS! Added placement:" -ForegroundColor Green
    $response | ConvertTo-Json
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response: $responseBody" -ForegroundColor Red
    }
}
