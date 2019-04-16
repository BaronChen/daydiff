# DayDiff

A small node cli tool to calculate the elapsed days between two different days, excluding start and end date.

## Requirement

- NodeJs 10
- yarn (optional)
- Docker (optional)

## Usage

### Build

```
yarn install
```

or

```
npm install
```

```
yarn run build
```

or

```
npm run build
```

### Run Command

```
yarn start <date1> <date2>
```

or

```
npm start <date1> <date2>
```

### Example

Example 1

```
yarn start 03/01/1989 03/08/1983
```

or

```
npm start 03/01/1989 03/08/1983
```

Example 2

```
yarn start 04/07/1984 25/12/1984
```

or

```
npm start 04/07/1984 25/12/1984
```

### Run with docker

#### Build docker image

```
docker build -t daydiff .
```

#### Run command

```
docker run daydiff yarn start <date1> <date2>
```

## Develope

### Run without build

```
yarn install
```

or

```
npm install
```

```
yarn run dev <date1> <date2>
```

or

```
npm run dev <date1> <date2>
```

### Run Test

```
yarn test
```

or

```
npm test
```
