# Map

The map feature requires a collection of tiles. To do this, you need to generate it.

If you're interested, check the [`JAGFx/ts-map`](https://github.com/JAGFx/ts-map) project.

See the [SCS_Map_Tiles](https://github.com/TwinDragon/SCS_Map_Tiles#supported-maps) repository for supported games, available versions and download links.

See the DLC compatibility on [this project](https://github.com/TwinDragon/SCS_Map_Tiles)

> Many thanks to [TwinDragon](https://github.com/TwinDragon) for keeping the map tiles collection up to date with each new version of the game.

In this section you can find the following information:

- How to use the map tile collection
- How to host the map tile collection
- How to generate the map tile collection

## Usage

The map functionality requires a collection of tiles. You have two ways to get these tiles:

- **Default remote**, you don't need to download anything. But you need an internet connection
- **Self-hosted remote**, you can use your own remote.

### Default

In the default configuration, the map settings are as follows:

- Tiles location: `Remote`
- Kind of map: `Vanilla`
- Custom remote tiles location: `https://ets2.jagfx.fr`
- Active map: `Auto`

This configuration can only use the base map and can automatically switch between ETS or ATS. This configuration does not support any other map mod.

If you want to use a modded map, see the `Custom` section.

### Custom

Go to `Menu > Config > Map of route advisor`

To change the tiles location, it's simplier and in two action:

- Enable the `Map > Custom tiles`
- Set your path on `Map > Custom remote tiles location`

> Note: All others settings will be ignored. It's concerned: `Active map`, `Kind of map`, `Remote tiles location` and `Game version`

See the next section on how to host tile collections.

## Self-hosting

If you wish, you can host your own collections of map tiles. See the previous section to enable this.

### Step 1: Get tiles

This project works with tiles from the [JAGFx / ts-map](https://github.com/JAGFx/ts-map) project. To get them, you can generate them yourself with the previous project, or get them from the [SCS_Map_Tiles](https://github.com/TwinDragon/SCS_Map_Tiles#supported-maps) project. 

Collecting other tiles from any other project will not be supported.

### Step 2: Host tiles

For both solutions, you need to keep the strict structure provided by the tile collection project. As follows:

```
├── <your_host>
    └── Tiles
    └── <Other JSON files>
    └── TileMapInfo.json
```

#### Own server

If you have your own server on the cloud or elsewhere, you can copy and paste all the content generated by the tiles project into your server.

#### Local server

If you just want to debug or if you don't want or can't host a cloud server, you can create a small server on the local machine (the machine used to run this application and SCS Games).

You can use this one: [`http-server`](https://www.npmjs.com/package/http-server).

````bash
$ http-server ./maps -p 8081 --cors -s
````

> This is a dependency of NodeJs. So you must have NodeJs installed to use it. This is not the only way to get a local server, if you want to use another method, feel free ;)


### Step 3: Set the url

Now you just need to define your host on the parameter.

| Hosted path = Path to set                 | Final path example                            |
|-------------------------------------------|-----------------------------------------------|
| `https://ets.jagfx.fr`                    | `https://ets.jagfx.fr/TileMapInfo.json`       |
| `https://awesome.domain.com`              | `https://awesome.domain.com/TileMapInfo.json` |
| `https://awesome.domain.com/my-map-tiles` | `https://awesome.domain.com/my-map-tiles/TileMapInfo.json`    |

> Make sure NOT to add a `/` at the end of the defined path. It is automatically added.

> When using a custom tile location, all other settings for the tiles on the map will be ignored.

Finally, set the path to the `Custom remote tiles location`.


## Generation

If you want to participate in this step, you will please me.

This project needs tiles for :

- ETS2 base map (Full DLC)
- ATS base map (Full DLC)
- Promod (ETS)
- Promod Canada

### Export the tiles

Check the side project [`JAGFx/ts-map`](https://github.com/JAGFx/ts-map) to know how ;)
