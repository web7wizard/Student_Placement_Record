# Test the backend API
Write-Host "Testing Backend API..." -ForegroundColor Green

# Test GET request
Write-Host "`n1. Testing GET /api/placements" -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost:8081/api/placements" -Method Get
    Write-Host "GET Success: Found $($response.Count) placements" -ForegroundColor Green
    $response | ConvertTo-Json -Depth 3
} catch {
    Write-Host "GET Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test POST request
Write-Host "`n2. Testing POST /api/placements" -ForegroundColor Yellow
$testData = @{
    name = "Test Student"
    department = "Computer Science"
    company = "Google"
    lpa = 25.5
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://localhost:8081/api/placements" -Method Post -Body $testData -ContentType "application/json"
    Write-Host "POST Success: Added placement with ID $($response.id)" -ForegroundColor Green
    $response | ConvertTo-Json -Depth 3
} catch {
    Write-Host "POST Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response Body: $responseBody" -ForegroundColor Red
    }
}

Write-Host "`nAPI Test Complete!" -ForegroundColor Green
