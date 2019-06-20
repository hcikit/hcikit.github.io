---
title: Quickstart
id: quickstart
---

HCI Kit is super easy to get started. This quickstart guide will show you how to run a basic experiment in a lab setting.

First, make sure you've installed node so we can use NPM. Everything should work with yarn as well.

To make things really easy we built a version of `create-react-app` but for hci experiments. Simply run:

```
npx create-react-app my-project --scripts-version @hcikit/hci-scripts
```

This created a folder called my-project with some awesome things inside:

- A working build environment using `create-react-app`
- An example experiment.

If we want to test our experiment just enter `npm start` which opens your browser with the example experiment already running. Feel free to run through the experiment and get a feel for the user experience. Download your logs by clicking the button at the end.

That's really all you need to run a local experiment. You can bring participants into the lab, have them run that experiment and download all of the log files.

For now, our experiment is missing a consent form and we'll have to add one of those. HCI Kit already comes with a built-in consent form so let's configure one of those.

We import the task we want by editing App.js, we modify the line:

```
import { InformationScreen, ... } from "@hcikit/tasks";
```

To be:

```
import { InformationScreen, ConsentForm, ... } from "@hcikit/tasks";
```

Now we can register the task directly after the imports:

```
registerTask('ConsentForm', ConsentForm)
```

Registering takes a name and the actual component. The name will be referenced in our configuration file.

Now that we've registered the ConsentForm we can use it in our configuration. Open `configuration.js` and let's add our consent form. We can see the props ConsentForm takes in the tasks documentation. [LINK]

Add the consent form as the first element of the children array:

```{
  // ...

  children: [


    // Begin Addition
    {
      task : 'ConsentForm',
      letter:`
# Consent Letter

You are about to complete a human-computer interaction experiment. This experiment follows the corresponding ORE procedure...
`,
      questions: [{
        'label': 'I consent to my data being collected in this experiment',
        required: true
      }]
    },
    // End addition


    {
      task: 'InformationScreen',
      // ...
    },
// ...
```

If you open the website again you should see your new consent form.

`task` tells the Workflow which component it should render based on the string sent to registerTask. All leaf nodes need to have the task property set. The [configuration](configuration.md) has a few special properties and a unique way of passing properties downwards.

The configuration understands inheritance, properties pass downwards automatically, but the lower properties override the ones above.
