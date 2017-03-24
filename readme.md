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

common options: [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--dry-run]
``` 
