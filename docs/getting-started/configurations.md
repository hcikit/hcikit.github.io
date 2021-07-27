---
sidebar_label: Configurations
sidebar_position: 3
---

# Configurations

In HCI Kit a configuration is a tree where the children at each level have some order. The order is important because the order allows us to run tasks in order. We use a tree because it reduces duplication, we can inherit properties from top to bottom. This is nice because say we have a within-subject experiment where we have conditions, blocks, and trials. With inheritance we can write:

Even with inheritance this is kind of bulky. And with bulky configuration we increase the chances that we have a bug. So we generate

## Built-in Props

### `children`

### `__INDEX__`

### `tasks` and `task`

## Inheritance

## Scoped Props
