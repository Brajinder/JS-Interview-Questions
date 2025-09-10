// | Environment                       | `var fruit = "apple";` → global? |
// | --------------------------------- | -------------------------------- |
// | Browser, `<script>` (non-module)  | ✅ yes → `window.fruit = "apple"` |
// | Browser, `<script type="module">` | ❌ no                             |
// | Node.js CommonJS file             | ❌ no                             |
// | Node.js ES module file            | ❌ no                             |
// | Node.js REPL                      | ✅ yes → `global.fruit = "apple"` |
