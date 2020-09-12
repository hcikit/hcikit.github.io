---
title: Configuration
id: configuration
---

HCI Kit uses the configuration to choose the the task(s) to display and what properties that task should receive. The configuration forms an ordered tree where each level is determined using a `children` property. There can be as many levels of children as required.

## Properties

### Property Precedence

Properties that are more specific (deeper in the configuration) take precedence over those that are higher.

In this case, `content`'s value is 'World'.

An example of a configuration is as follows:

```
{
  experimentVersion: 1,
  content: 'Hello',
  children : [
    {
      task: "InformationScreen",
      withContinue: false,
      content : 'World'
    }
  ]
}
```

If a property is defined at the top level of the configuration it cascades downwards. The framework passes all properties to the task before the task is rendered. In the above example the `InformationScreen` task would receive the properties:

```
{
  experimentVersion: 1,
  content: 'World',
  withContinue: false
}
```

Note the precedence of `World` rather than hello.

### Special Properties

Some properties are reserved for the workflow manager.

#### Task

Determines which task to render. The workflow creates a registry of tasks that can be rendered using the registerTask function.

#### Tasks

Sometimes having multiple tasks might be useful. These are not additive:

```
{
  tasks : ['InformationScreen', 'DisplayText'],
  children : [
    {
      tasks : ['ConsentLetter']
    }
  ]
}
```

The tasks will only be ConsentLetter as the property gets overwritten using property precedence.

Combining tasks and task we append the task to the rest of the tasks.

```
{
  tasks : 'Fitts',
  children : [
    {
      tasks : ['ConsentLetter','InformationScreen', 'DisplayText']
    }
  ]
}
```

The tasks that get rendered will be Fitts, ConsentLetter, InformationScreen, DisplayText.

### Children

The children property contains the next set of tasks for the workflow to go through. In this example, order shows what order the config would be parsed in.

```
{
  children : [
    {
      order : 1
    },
    {
      order : 2
    },
    {
      children: [
        {
          order : 3
        }
      ]
    },
    {
      order : 4
    }
  ]
}
```

## Scoping

Configs can sometimes get messy or two tasks might use the same property. They can be scoped by using the task name:

```
{
  tasks: ['InformatioScreen', 'ConsentLetter']
  InformationScreen : {
    content : 'hello world'
  },
  withContinue: true
}
```

In this case InformationScreen will receive:

```
{
  content : 'hello world',
  withContinue: true
}
```

But ConsentLetter will only receive:

```
{
  withContinue: true
}
```
