<p align="center">
      <strong>Hull is a Work in progress</strong>
</p>
<p align="center">
  <img src="resources/logo.png" alt="Hull Logo"/>
</p>


Javascript command that acts as a layer between the shell and the analytics. This will then allow us be an object that 
passes commands through it to track analytics while executing commands via exec('ls -la');

var obj = {
    run: function(command) {
        // Split off first command and track as analytics e.x. ( ls - la ) cuts ls and tracks it. Have live dashboard to display stats
        exec(command);
    }
}
g
module.exports = obj;