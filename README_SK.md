# EXI Academy – iPhone PWA

Samostatná webová aplikácia pre iPhone podľa dodaného Android projektu EXI Academy. Pôvodný Android projekt sa nemení.

## Predinštalovaná knižnica školení

Balík obsahuje 13 pôvodných ZIP školení v priečinku `trainings/`. Pri prvom otvorení aplikácia stiahne tieto ZIPy z vlastného hostingu, overí ich a rozbalí do lokálneho IndexedDB. Zamestnanec ich preto po úspešnom prvom načítaní uvidí priamo v príslušných kategóriách bez ručného importovania. Prvé spustenie vyžaduje internet; potom sú uložené lokálne. Pôvodné ZIP archívy sa neupravujú. Celý obsah stránky a školení bude verejne dostupný na GitHub Pages každému, kto pozná adresu.

## Prenesené funkcie v tejto verzii

- responzívny dashboard a spodná navigácia pre telefón,
- kategórie Zima, Leto, Ostatné, HW a Iné školenia,
- lokálna knižnica školení v IndexedDB,
- ZIP import kompatibilný so základnou štruktúrou Android školení (`metadata.json`, HTML, CSS, JS, obrázky a lokálne súbory),
- kontrola ciest ZIP proti Zip Slip, kontrola počtu súborov a veľkosti rozbalených dát,
- prehrávač HTML školení s mapovaním lokálnych assetov,
- kalkulačka dĺžky lyží s rovnakými vstupmi a korekciami ako Android `ToolsScreen.kt`,
- kalkulačka veľkosti bicykla s rovnakými kategóriami, rozsahmi, pomocnými vzorcami a orientačnými tabuľkami z Android `BikeSizeData.kt`,
- DIN pomôcka s rovnakou referenčnou tabuľkou, výberom riadku, korekciami a validáciou ako Android `DinCalculator.kt`,
- nastavenia, lokálne počítadlá úložiska, vymazanie importovaných školení s potvrdením,
- návod na tvorbu a zdieľanie ZIP školení,
- PWA manifest a Service Worker pre offline shell po prvom úspešnom načítaní.

## Dôležité rozdiely a obmedzenia

1. Toto je samostatná PWA, nie natívna iOS aplikácia. Nevyžaduje Apple Developer účet ani App Store.
2. Nie je možné garantovať úplnú zhodu správania s iOS bez testovania na skutočnom iPhone. Pred odovzdaním zamestnancom treba otestovať inštaláciu na plochu, import ZIPov, veľké archívy, prehrávanie všetkých typov HTML školení, úložisko a offline režim.
3. Safari/iOS môže obmedzovať dostupné úložisko. Importy veľkých školení treba overiť na cieľových iPhonoch; ponechaj originálne ZIP súbory ako zálohu.
4. HTML školenie, ktoré vyžaduje externý server, vzdialené skripty, externé obrázky, autentifikáciu alebo špecifické WebView API, nemusí byť offline kompatibilné. Každé školenie treba otestovať.
5. DIN hodnota je len orientačná hodnota z referenčnej tabuľky, ktorá v Android zdroji nebola nezávisle overená voči úplnému zneniu ISO 11088/8061. Nie je to nastavenie viazania ani vypínací moment. Konečné nastavenie musí vykonať kvalifikovaný servis na kalibrovanom zariadení.
6. Veľkosti bicyklov a dĺžky lyží sú orientačné rovnako ako v Android zdroji; treba overiť odporúčania konkrétneho výrobcu.
7. AI asistent v Android projekte bol odstránený a preto nie je súčasťou tejto PWA.
8. Import školení je lokálny. Aplikácia nemá centrálnu synchronizáciu progresu alebo importovaných ZIPov medzi zariadeniami.
9. GitHub Pages je verejný hosting. Každý, kto pozná adresu, môže aplikáciu otvoriť. Bez samostatného overovania nemožno garantovať, že ju používajú iba zamestnanci EXIsport.
10. Prvé otvorenie a aktualizácie vyžadujú internet. Po úspešnom načítaní a aktivovaní Service Workera sa aplikačný shell môže otvoriť offline; školenia musia byť vopred importované.

## Lokálne spustenie na Windows

V koreňovom priečinku projektu spusti:

```powershell
py -m http.server 8080
```

Na PC otvor `http://localhost:8080`. Service Worker vyžaduje HTTPS alebo localhost.

## Bezplatné nasadenie cez GitHub Pages

1. Vytvor nový repozitár, napr. `exi-academy-iphone`.
2. Nahraj obsah tohto priečinka do koreňa repozitára.
3. V GitHub otvor **Settings → Pages**.
4. Zvoľ **Deploy from a branch**, vetvu `main` a priečinok `/ (root)`.
5. Po publikovaní otvor HTTPS adresu v Safari.
6. V Safari zvoľ **Zdieľať → Pridať na plochu**.

GitHub Pages obsah je verejný. Nenahrávaj sem heslá, podpisovacie kľúče, interné dokumenty ani osobné údaje.

## Bezpečnosť a pôvodné súbory

Pôvodné Android zdrojové súbory, APK, `my-upload-key.jks`, `debug.keystore`, Firebase konfigurácia a heslá nie sú súčasťou tohto PWA balíka. Pôvodné Android školenia ZIP sa nemenia.
