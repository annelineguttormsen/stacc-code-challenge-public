![[Joing us on Slack](https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/07/add-to-slack-button.png?auto=format&q=60&fit=max&w=930)](https://media-exp1.licdn.com/dms/image/C4D0BAQEJziJobYtFyQ/company-logo_200_200/0/1625126662709?e=2159024400&v=beta&t=yAgccdM6O3UYZg-Eoqux-e2t_D8_kRCMj4oeUkr9-qc)


 

# Stacc Code Challenge 2021: Know Your Customer
KYC eller “know your customer” er virkemidler som sikrer at et finansforetak vet nok om sine kunder til å forhindre og avdekke om det finansielle systemet brukes til ulovlig virksomhet, som hvitvasking, korrupsjon og terrorfinansiering. Et av disse virkemidlene er å utføre en PEP-sjekk (Politically Exposed Person) av kunder. En politisk eksponert person har generelt sett større risiko for korrupsjon og bestikkelser knyttet til seg, og vil dermed være flagget for manuell behandling i f.eks en lånesøknad hos en bank.


## Kodeoppgave 📝
Årets kodeoppgave er en åpen oppgave relatert til KYC. Det er opp til dere hvilken teknologi dere bruker til oppgaven og hvordan den løses. Det er dermed mulig å løse den uavhengig av om du foretrekker backend, frontend eller hele stacken. Lag en enkel webapp eller et API, som kan utføre en eller annen form for KYC-sjekk av en person.

Minimums kravet til oppgaven er at du får utført en PEP sjekk av en potensiell kunde sitt navn. Dette har vi laget et API for i forbindelse med oppgaven. Oppgaven kan tolkes bredt, og vi oppfordrer deg til å være kreativ i din besvarelse. Vi foreslår to utgangspunkt til oppgaven i avsnittet under. Du velger selv om du vil gjøre a), b) eller begge deler:

### Forslag til oppgaver
a) Lag en enkel webapp som lar brukeren utføre en PEP sjekk av én person.
  * En mulig utvidelse av oppgaven kan være å legge til funksjonalitet for å utføre en PEP sjekk av alle personene i et selskap via `/roller` endepunktet i APIet vårt.
  * Du velger selv om du vil benytte deg av vårt API eller eksempel dataen som er vedlagt.

b) Implementer ditt eget KYC API som returnerer treff på enkeltpersoner og/eller selskap.

  * Du finner mange nyttige datasets i tilleg til PEP listen på opensanctions.com/datasets som kan være av interesse i forbindelse med å lage et eget API.
  * Mulig utvidelse av oppgave b) er å tilgjengeliggjøre API’et du lager via HTTP.
## Stacc PEP API
I forbindelse med kodeoppgaven har vi snekret sammen et simpelt API, med to endepunkt: `/pep` og `/roller`. Spørringer mot APIet utføres ved HTTP metoden POST, hvor payload er på JSON format.

Requests finner du her:  
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9949536-5ea0a799-10d7-4eb7-b4ca-8042fee1e741?action=collection%2Ffork&collection-url=entityId%3D9949536-5ea0a799-10d7-4eb7-b4ca-8042fee1e741%26entityType%3Dcollection%26workspaceId%3D22a3a0b5-894d-4317-bf05-a9d750e65244)

### Formelle krav
1. Oppgaven må leveres innen **TODO: delivery date**
2. Oppgaven må publiseres på github(gjerne *public*)
   1. Om du ønsker å holde denne privat så må du invitere Ari og Herman slik at de kan lese repo.
> Vi oppfordrer kandidater til å bruke **git** slik at vi sammen kan se igjennom commits og historikk.
3. **[Alle oppgaver må inneholde en *readme.md* fil som beskriver prosjektet i korte trekk. Følg denne linken for mal.](https://github.com/hpl002/stacc-code-challege/blob/master/readmeTemplate.md)**
>  Her dokumenterer og kommenterer du smått underveis. Spesielt viktig at det medfølger instrukser som beskriver hvordan prosjektet kjøres.  
*Husk at dette ikke bare skal kjøre på din egen maskin!*

 
# Lykke til! ✌️
Lykke til! 

Spørsmål angående oppgaven kan sendes til Ari eller Herman via slack eller direkte på epost:  
[![Joing us on Slack](https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/07/add-to-slack-button.png?auto=format&q=60&fit=max&w=930)](https://join.slack.com/share/zt-x1qfqjc3-10rZlZDDvJVb_9i8Q2FCiA)

Ari: ariens@stacc.com  
Herman: hermanp@stacc.com
