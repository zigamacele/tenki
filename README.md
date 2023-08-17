<div align="center">

<img src="https://i.imgur.com/lhN4Vt5.png" width="200">

# Tenki

simple single page weather app built with react

[Check Live Version Here]()

</div>

<br />

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/zigamacele/tenki.git
cd tenki
```

Install the dependencies:

```bash
pnpm install
```

Set the environment variables:

```bash
cp setup/.env.example .env
# open .env and modify the environment variables
```

## Commands

Running in development:

```bash
pnpm run dev
```

Running in production:

```bash
# build
pnpm run build
```

## Environment Variables

The environment variables can be found and modified in the `.env` file.
Get your API key here: https://openweathermap.org/

```bash
# API KEY
VITE_API_KEY=""
```
