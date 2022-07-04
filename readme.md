# Stacc code challenge 2022

## Oppgavebeskrivelse
Jeg har valgt å løse oppgaven *"Lag en enkel webapp som lar brukeren utføre en KYC-sjekk av én person."*. 

Oppgaven har hovedfokus på frontend. Prosjektet består av Vue, og bruker Composition API og SCSS. 

## Hvordan kjøre prosjektet
For å kjøre prosjektet lokalt, kjør disse kommandoene i kommandolinjen fra root mappen.
```
npm install
npm run serve
```

## Kommentarer
Prosjektet gjør et kall opp mot Open Sanctions sitt API. Maks søkeresultater er satt til 25.

Fra starten av var tanken å ta i bruk validering på søkefeltet, men jeg fant ut at Open Sanctions sitt API også tar imot numre og spesielle tegn og droppet det.

Man kan søke ved å ta i bruk inputfeltet, men search query-en i URL'en kan også brukes slik:
```
...?search=knut
```
Det skal være fullt mulig å gå fram og tilbake i nettleserhistorien og se siden oppdatere seg basert på URL.

Jeg har prøvd å legge opp filene slik jeg ville i et virkelig prosjekt, for eksempel hvor komponenter, views, SCSS filer fort kan bli uoversiktlig når det blir mange av dem.

Jeg satt opp prosjektet til å ta i bruk Vue router for flere sider, men fordi konseptet er enkelt ble det bare én side. Router brukes dermed bare til å sjekke query i URL'en.