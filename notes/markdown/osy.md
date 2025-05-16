
# Operační Systémy - OSY

**Tento dokument nikterak nezaručuje stoprocentní pokrytí veškerého učiva nutného ke složení maturitní zkoušky, individuální přezkoumání každé maturitní otázky zvlášť a dohledání případně chybějících informací JE DOPORUČENO! Tvůrce dokumentu není zodpovědný za případné psychické, fyzické, duševní, či materiální škody způsobené nedbalou přípravou na maturitní zkoušku. 🐸🐸**

- ***Odkazy na další materiály můžete naleznout v souboru ZDROJE K OTÁZKÁM.***

## Operační Systém - OS

- Použití OS:
  - **Desktopové**
    - Stolní PC
    - Windows, Linux, MacOS
  - **Serverové**
    - Linux (Windows Server bruh)
    - V datacentrech, servery, výpočetní technika.
  - **Mobilní**
    - Android, iOS
- Umožňuje pro uživatele propojit software s hardwarem.
- OS se v základu dělí na **jádro**(kernel) a **uživatelské prostředí** (userspace)
- **API** (Application Programming Interface) - Rozhraní pro komunikaci programů mezi sebou.

### Jádro

- ovládá hardware (ovladače)
- základní dělení
  - **Monolithické**
    - Všechny systémové komponenty běží v jednom společném prostoru.
  - **Mikrojádro**
    - Různé systémové komponenty běží oddělené od nejzákladnějšího jádra.
    - Pád odděleného komponentu nezpůsobí zhroucení jádra, bývá ale pomalejší.
  - **Hybridní**
    - Použití obou principů na různé části.
    - Zvyšuje složitost jádra.
- řízení procesoru
- **Scheduler** – plánuje běžící procesy, spouští je
  - obnoví stav procesu z doby kdy byl naposledy využíván (nahraje ho z RAM)
- **Interrupt** – přerušuje procesy
  - ukládá proces na RAM
- **Preemtivní jádro** - OS rozhoduje o čase procesu
- **Kooperativní jádro** - aplikace sama určuje svůj čas na procesoru a pak předává slovo OS - zastaralé, nepoužívá se
- **Multitasking**
  - Procesy se rychle střídají na každém jádře procesoru.
  - Dá se tak pracovat s více programy najednou.

### Souborové Systémy (File System - FS)

- **NTFS** (New Technology File System) - FS používaný na Windows
- **Ext4** - nejpoužívanější FS na Linuxu
- **FAT32** - universální FS, vhodný na Flash disky
- **Journaling** – Funkce FS zajišťující detekci přerušení zápisu při náhlém výpadku disku, aby na disku nevznikaly tzv. mrtvé bloky.
- **Defragmentation** – Optimalizace rozložení dat na Hard discích. Zajistí, aby byly soubory v jednom celku, a tím se daly rychleji načíst z disku.
  - Neplatí pro SSD, u nich se pro optimalizaci používá funkce **TRIM** za odlišným účelem.

### Soustava Jednotek SI

- `Kilo – 1 000`
- `Mega – 1 000 000`
- `Giga – 1 000 000 000`
- `Tera – 1 000 000 000 000`
- *umět rozeznat u věcí jako velikosti disku, frekvence procesoru atd.*

### BIOS

- nahraný na čipu základní desky
- klíčový komponent ke spuštění počítače, nezávislý na OS
- **POST** (Power On Self Test) - kontrola funkčností nutných komponentů před spuštěním počítače (CPU, RAM, GPU)
- **Boot** - spuštění OS
- **Bootloader** - zavaděč, který nahraje OS do RAM
- **MBR** (Master Boot Record) - speciální záznam na začátku disku, který uvádí, z jaké části disku spustit **Bootloader**
- Postup **Bootování**:
  1. Stiskne se vypínač
  2. **BIOS** zahájí **POST**
  3. **BIOS** načte **Bootloader** pomocí **MBR**
  4. **Bootloader** nahraje OS do RAM
  5. Spustí se OS

## Komponenty

- *umět rozeznat základní desku laptopu a desktopu*
- *umět popsat sloty (PCIe, USB atd.) a další součástky (např. baterku)*
- *znát HDD a SSD a rozdíly mezi nimi*
- *power supply*

## Windows

- Operační systém používaný na většině desktopových počítačů (bohužel)
- Proprietární, vyžaduje placenou licenci k neomezenému použití
- Hybridní jádro.
- Edice Windows
  - **Home** - základní edice pro běžné uživatele
  - **Pro** - rozšířená edice pro pokročilé uživatele
    - navíc má např. **Hyper-V**, **Vzdálený Přístup** na daný PC, **BitLocker** šifrování disku
    - je dražší
  - **Education**
    - pro školy
  - **Enterprise**
    - pro střední a větší společnosti
  - **IoT**
    - Na zařízení IoT
  - **Server**
    - Na servery... SMH
- Významné Verze Windows
  - založené na **DOS**
    - 1
    - 2
    - 3
    - 95
    - 98
  - založené na jádře **NT**
    - XP
    - Vista
    - 7
    - 10
    - 11 - nejnovější
- ***více informací bych si rozhodně dohledal i jinde, nechce se mi tu všechno rozepisovat***

### Windows Server

#### Active Directory

- Doména např. **decko.cz**
- Další doména např. **decko.sk**
- Společně mohou vytvořit **strom(tree)**
- Více stromů je **les(forest)**
- Kde najít nějaký informace k AD
  - [ChatGPT](https://chatgpt.com/)
  - [Typy objektů](https://www.ondrej-soukup.cz/2009/08/typy-ad-objekt/)
  - [Něco z Windows Serveru 2003](https://moodle.vscht.cz/pluginfile.php/2976/mod_resource/content/0/AD-objekty.pdf)

## Licence

- **Creative Commons** - používá se u tvůrčích děl.
  - [Vysvětlení na jejich webu](https://creativecommons.org/share-your-work/cclicenses/)
- **GNU GPL** (general public licence) v2/v3 - populární open-source licence (Linux)
- **BSD** - permisivnější open-source licence
- **Freeware** – software cenově zdarma, ale ne open-source
  - např. Discord (technicky Freemium)
- **Free Software** (open-source) - software s volně dostupným kódem, včetně povolení modifikace a redistribuce
  - např. Linux
  - [Definice open-source na stránkách OSI](https://opensource.org/osd)
- **Proprietární Software** – uzavřený, nedostupné zdrojové kódy, často placený
  - např. Adobe Produkty (Photoshop atd.)

## Linux

- Jádro OS založené **Linusem Torvaldsem**.
- Navržené podle architektury OS **UNIX**.
- **Monolitické** ale modulární.
- Linux je zároveň i obecný termín pro skupinu OS založených na tomto jádře.
- Je open-source - licence **GNU GPL v2**
  - paracují na něm vývojáři z celého světa, včetně firem jako Microsoft/Google/Amazon
- **GNU** - nástroje uživatelského prostředí OS, také po vzoru **UNIX**u
  - proto **GNU/Linux**
- drtivá většina serverů, datacenter a superpočítačů běží na Linux
- Android OS používá vlastní verzi jádra Linux
- Výsledné OS na bázi Linuxu jsou tzv. **distribuce**
  - známé např. **Ubuntu**, **Red Hat Enterprise Linux**, **Arch Linux** a [tisíce dalších](https://en.wikipedia.org/wiki/List_of_Linux_distributions#/media/File:Linux_Distribution_Timeline.svg).
  - každá jde podle své vlastní filozofie a tím určuje svůj účel.
- Terminál - oblíbený program každého uživatele Linuxu
  - způsob provozování počítače pomocí příkazů bez GUI (grafického rozhraní)
  - **shell** - program, který zpracovává dané příkazy
    - základní shell na Linux - **Bash**
  - [Seznam a vysvětlení základních příkazů](https://www.geeksforgeeks.org/linux-commands-cheat-sheet/)
    - [Česky](https://informatecdigital.com/cs/z%C3%A1kladn%C3%AD-p%C5%99%C3%ADkazy-v-linuxu/)
  - [Vysvětlení oprávnění souborů na Linuxu](https://linuxhandbook.com/linux-file-permissions/)
    - [Česky](https://etechblog.cz/vysvetleni-opravneni-k-souborum-a-adresarum-linux/)
  - [Vysvětlení složek v root FS na Linuxu](https://linuxhandbook.com/linux-directory-structure/)
    - [Česky](https://www.linux-mint-czech.cz/2014/09/jaky-je-smysl-slozek-v-adresarove-strukture-linux-mintu/)
- `/etc/passwd` - Soubor kde jsou uloženi uživatelé.
- `/etc/group` - Soubor, kde jsou uložené skupiny.
- `/etc/shadow` - Soubor, kde jsou uložená hesla.

## Virtualizace

- proces spouštění OS na virtuálním hardwaru uvnitř již běžícího OS
- 2 úrovně
  1. blíže k hardwaru – **Hyper-V** (Windows), **KVM** (Linux)
  2. více softwarové – **Virtual-Box**, **VMWare** atd.
- využití - škálování serverů, testování, izolace (bezpečnost)
- **Kontejnery**
  - Programy pro zajištění konzistentního prostředí pro spuštění softwaru na různých systémech.
  - např. **Docker**, **Podman**
  - mohou využívat virtualizaci

## Ochrana Dat

### Šifrování

- Symetrické
  - TEXT <– Klíč –> Šifra

- Asymetrické
  - využívá se u E2EE (messaging apps), digitálních podpisů
  - [Diagram vysvětlující digitální podpis](https://spstrebesin-my.sharepoint.com/:i:/g/personal/dobias121_trebesin_cz/Ee8ZAoMk0KdDhO9odYIaLBEBN4ZuzbTmYUsorbmCT6moEg?e=QxuFh1)

### Raid

- Seskupení více disků do 1 logické jednotky pro zefektivnění či zálohování dat.
- Úrovně RAIDu
  - 0 - pouze logické rozdělení - části dat jsou rozložený po více discích (střídavé ukládání)
    - zvýšení výkonu
  - 1 - zrcadelní dat 1:1
    - menší kapacita
  - 2 - jednoduchá error korekce
  - 5 - min. počet 3 disků - pokročilá error korekce
    - kontrolní data (parity) jsou distribuovaná po discích, takže při výpadku kteréhokoliv z nich (pouze 1 může vypadnout), lze ztracená data dopočítat
    - [Obrázek pro představu](https://spstrebesin-my.sharepoint.com/:u:/g/personal/dobias121_trebesin_cz/ESZb8AKtGTlJu6NlNi5ZvcMBnd5Iax94QHs1_mvqow5sjw?e=iTcFXr)
    - je dražší na provoz
