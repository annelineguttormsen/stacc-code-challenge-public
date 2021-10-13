![[Joing us on Slack](https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/07/add-to-slack-button.png?auto=format&q=60&fit=max&w=930)](https://media-exp1.licdn.com/dms/image/C4D0BAQEJziJobYtFyQ/company-logo_200_200/0/1625126662709?e=2159024400&v=beta&t=yAgccdM6O3UYZg-Eoqux-e2t_D8_kRCMj4oeUkr9-qc)


 

# Stacc Code Challenge 2021: Know Your Customer
KYC eller “know your customer” er virkemidler som sikrer at et finansforetak vet nok om sine kunder til å forhindre og avdekke om det finansielle systemet brukes til ulovlig virksomhet, som hvitvasking, korrupsjon og terrorfinansiering. Et av disse virkemidlene er å utføre en PEP-sjekk (Politically Exposed Person) av kunder. En politisk eksponert person har generelt sett større risiko for korrupsjon og bestikkelser knyttet til seg, og vil dermed være flagget for manuell behandling i f.eks en lånesøknad hos en bank.


## Kodeoppgave 📝
Årets kodeoppgave er en åpen oppgave relatert til KYC. Det er opp til dere hvilken teknologi dere bruker til oppgaven og hvordan den løses. Det er dermed mulig å løse den uavhengig av om du foretrekker backend, frontend eller hele stacken. Lag en enkel webapp eller et API, som kan utføre en eller annen form for KYC-sjekk av en person.

*Se avsnittet som omtaler formelle krav for **minimumskravet**.*

#
## Oppgave Forslag
**a) Lag en enkel webapp som lar brukeren utføre en KYC-sjekk av én person.**

**b) Implementer ditt eget KYC API som returnerer treff på enkeltpersoner og/eller selskap.**
#
Vi presiserer at kandidater står fritt til å utforske problemstillingen slik de selv ønsker (etter minimumskravet)
> Hvis du er tryggest på front-end og ikke ønsker å knote med et eget API så er dette ikke noe problem.
> Kanskje back-end er mer din greie? Bruk heller mesteparten av tiden din her.

* *Du velger fritt hvilken oppgave du vil gjøre. men oppfordres til å gi et forsøk på begge.*




**Mulige Utvidelser av a) og b)**
 - Publiser webapp og/eller API slik at de er tilgjengelig via HTTP
  > Kan f.eks publiseres til azure, google cloud, heroku, surge eller kanskje din egen server?
 - Utvide KYC/PEP sjekken til å sjekke alle personer i et foretak istedenfor bare én person.
  > Visualisere sjekken på en kreativ og oversiktelig måte?

# Stacc KYC API

**Du velger selv om du vil benytte deg av vårt API eller eksempel dataen som er vedlagt.**
 - se tilhørende .csv filer i repo

I forbindelse med kodeoppgaven har vi laget et simpelt API(express.js API), med noen få endepunkter. Her kan du hente data fra brønnøysundregisteret og open sanctions.

API tilgjengelig på https://stacc-code-challenge-2021.azurewebsites.net
> Merk at alle requests går via /api
> */docs* ruter tilbake til dette repoet

Alle requests er dokumentert i postman(response schema kan du hente ved å utføre request selv):

**Les** dokumentasjon
[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/9949536/UV5TEzGZ#a9e4e976-c338-48b3-919b-3eb492693802)

**Fork** collection her
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9949536-5ea0a799-10d7-4eb7-b4ca-8042fee1e741?action=collection%2Ffork&collection-url=entityId%3D9949536-5ea0a799-10d7-4eb7-b4ca-8042fee1e741%26entityType%3Dcollection%26workspaceId%3D22a3a0b5-894d-4317-bf05-a9d750e65244)

## Praktiske krav til innlevering
1. Oppgaven må leveres i tide.
2. Oppgaven må publiseres på github(gjerne *public*)
   1. Om du ønsker å holde denne privat så må du invitere Ari og Herman slik at de kan lese repo, kontakt informasjonen vår finner du lenger nede.
> Vi oppfordrer kandidater til å bruke **git** slik at vi sammen kan se igjennom commits og historikk.
3. Alle oppgaver må inneholde en *readme.md* fil som beskriver prosjektet i korte trekk. Følg [denne linken for mal.](https://github.com/hpl002/stacc-code-challege/blob/master/readmeTemplate.md)
>  Her dokumenterer og kommenterer du smått underveis. Spesielt viktig at det medfølger instrukser som beskriver hvordan prosjektet kjøres.
*Husk at dette ikke bare skal kjøre på din egen maskin!*


# Lykke til! ✌️

Vi har opprettet en egen Slack kanal for spørsmål relatert til oppgaven, ikke nøl med å skrive til oss skulle noe være uklart. Spørsmål angående oppgaven kan sendes til Ari eller Herman via slack eller direkte på e-post:

## Slack Kanal

[![Joing us on Slack](https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/07/add-to-slack-button.png?auto=format&q=60&fit=max&w=930)](https://join.slack.com/share/zt-x1qfqjc3-10rZlZDDvJVb_9i8Q2FCiA)

## E-post 📬
* ariens@stacc.com

* hermanp@stacc.com
