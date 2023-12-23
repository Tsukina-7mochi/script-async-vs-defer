# script loading: async vs defer

Project to test execution order of `<script>` specified script with attributes `async`, `defer` and `module`.

## Server

```sh
$deno run --allow-net --allow-read server.ts
```

### Served files

- `/blocking.html`: `<script '${file}.js' />`
- `/async.html`: `<script '${file}.js' async />`
- `/defer.html`: `<script '${file}.js' defer />`
- `/module.html`: `<script '${file}.js' module />`
- `/module-async.html`: `<script '${file}.js' module async />`
- `/script1.js`: takes 1 sec to download
- `/script2.js`: immediately downloaded
