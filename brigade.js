const { events, Job } = require("brigadier")

events.on("push", () => {
  var job = new Job("do-nothing", "alpine:3.4")
  job.tasks = [
    "echo Hello",
    "echo World",
    "echo Manish"
  ]

  job.run()
  
})