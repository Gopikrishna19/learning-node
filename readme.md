# Learning Node 

## Lesson 1 Intro to NPM

### help

```posh
npm -h                              # show in cli
npm [command] -h                    # show about command in cli
npm help [command]                  # opens browser
npm help-search [term]              # search help content for the term

```

### shortcuts

[link to misc shorthand syntax](https://docs.npmjs.com/misc/config)

### creating package

```posh
npm init                            # initialize packagae.json with initial values
npm init -y                         # initialize packagae.json with default values
```

### npm init defaults

```posh
npm set init-[config] '[value]'     # set default config
npm get init-[config]               # get config
npm config delete init-[config]     # delete set config
```

[link to list of init-*](https://docs.npmjs.com/misc/config)

Config is stored at `~/.npmrc`.
