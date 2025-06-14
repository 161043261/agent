# Your AI agent

- Use camelCase for variable and function names.
- Use PascalCase for class names and interface names.
- Use camelCase for interface members.
- Use PascalCase for type names and enum names.
- Name files with camelCase (for example, ebsVolumes.tsx or storage.ts)

## Build

```bash
pnpm install -g eas-cli
eas login
eas build:configure

keytool \
  -genkey -v \
  -keystore release.keystore \
  -alias ******** \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -storepass ******** \
  -keypass ******** \
  -dname "CN=io.github.tianchenghang.agent,OU=,O=,L=,S=,C=JP"

# CN: Common Name
# OU: Organizational Unit
# O: Organization
# L: Locality
# S: State
# C: Country

# Create native directory
pnpm exec expo prebuild
mkdir ./android/keystores
mv ./release.keystore ./android/keystores/

cd android/
./gradlew app:bundleRelease

scoop install gradle && gradle app:bundleRelease
brew install gradle && gradle app:bundleRelease
```
