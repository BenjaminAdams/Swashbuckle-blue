@echo Off
set config=%1
if "%config%" == "" (
   set config=Release
)

set version=
if not "%PackageVersion%" == "" (
   set version=-Version %PackageVersion%
)

REM Build
%WINDIR%\Microsoft.NET\Framework\v4.0.30319\msbuild Swashbuckle.sln /p:Configuration="%config%" /m /v:M /fl /flp:LogFile=msbuild.log;Verbosity=Normal /nr:false

REM Package
mkdir Build
call %nuget% pack "Swashbuckle.Core\Swashbuckle.Core.csproj" -symbols -o Build -p Configuration=%config% %version%
call %nuget% pack "Swashbuckle.WebHost\Swashbuckle.WebHost.csproj" -symbols -o Build -p Configuration=%config% %version%

