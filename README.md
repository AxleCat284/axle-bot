# Axle Bot

# Requirements

- [pnpm](https://pnpm.io) installed `npm i pnpm -g`
- [pm2](https://pm2.keymetrics.io) installed `npm i pm2 -g`
- [node.js](https://nodejs.org/en) v20 with npm (windows, mac and linux tested)

# Installing

- extract the code
- in the main directory of the package, create a file named `.env` exactly like that
- open the file and add

  ```apache
  TOKEN=placeholder (leave as is)
  PROD= This is where you put your production bot token
  DEV= this is where you put your dev testing token, use ^ if you dont have 2 bots
  ID=placeholder (leave as is)
  PRODID= The discord bot id matching the bot PROD=
  DEVID= the discord bot id matching the bot DEV=

  ```
- save the file and run the following scripts

  - `npm run build` to build the dependencies (you can also use `pnpm i`)
  - `npm run dev` or `npm run start` to start the bot!
  - to debug simply type node ``./start/developer_start.js``
  - if everything works, have fun!


# License

**Miscellaneous Applications Usage Agreement**: Utilize this license for any project(s) not under the purview of the parent organization but still able to inherit the SkyStats Development License Terms. [Read more](https://github.com/SkyStats-Development/license/blob/main/Miscellaneous%20Applications).

# Version

- 0
