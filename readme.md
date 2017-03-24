# Learning Node 

## Lesson 1 Intro to NPM

### help

```posh
npm -h                                  # show in cli
npm <command> -h                        # show about command in cli
npm help <command>                      # opens browser
npm help-search <term>                  # search help content for the term

```

### shortcuts

[link to misc shorthand syntax](https://docs.npmjs.com/misc/config)

### creating package

```posh
npm init                                # initialize packagae.json with initial values
npm init -y                             # initialize packagae.json with default values
```

### npm init defaults

```posh
npm set init-<config> '<value>'         # set default config
npm get init-<config>                   # get config
npm config delete init-<config>         # delete set config
```

[link to list of init-*](https://docs.npmjs.com/misc/config)

Config is stored at `~/.npmrc`.

### installing packages

```posh
npm <install|i>                         # install packages in package.json
npm <install|i> <name>[@tag|version]    # install given package at given version
```
Common options are
```
[-S|--save|-D|--save-dev|-O|--save-optional] 
[-E|--save-exact] 
[-B|--save-bundle] 
[--dry-run]
``` 

### installing packages globally

```posh
npm <install|i> -g <name>[@tag|version]
``` 

### listing packages
```posh
npm <list|ls>                           # list all packages in package.json
npm <list|ls> <name>[@tag|version]      # list given package at given version
npm <list|ls> [--depth x]               # list dependency tree at `x` level
npm <list|ls> [--global|-g]             # list globally installed packages
npm <list|ls> [--long]                  # list packges with descipriton and other info
npm <list|ls> [--json]                  # print dependency tree as json
npm <list|ls> [--parseable]             # print dependency tree as dir strings
npm <list|ls> [--dev|--prod]            # list dev/prod only dependencies
```
