
# Počítačové Sítě - POS

**Tento dokument nikterak nezaručuje stoprocentní pokrytí veškerého učiva nutného ke složení maturitní zkoušky, individuální přezkoumání každé maturitní otázky zvlášť a dohledání případně chybějících informací JE DOPORUČENO! Tvůrce dokumentu není zodpovědný za případné psychické, fyzické, duševní, či materiální škody způsobené nedbalou přípravou na maturitní zkoušku. 🐸🐸**

- ***Odkazy na další materiály můžete naleznout v souboru ZDROJE K OTÁZKÁM.***

## DNS

- Služba co převádí domény na IP adresy.
- Můžeme mít vlastní v síti pro vnitřní potřeby a nebo použít globální pro domény mimo vnitřní síť.
- (v testu bude chtít i postup nastavení ve Windows Serveru GUI).
- Cache se používá pro urychlení zjištění adresy, aby nebylo třeba projít celým postupem zbytečně mnohokrát.
- Postup zjištění DNS:
  - **PC** (Cache) ->
  - **ISP** - Resolver (Cache) ->
  - **DNS** ->
    1. **Root** (.com,.cz)
    2. **TLD** (google.com, seznam.cz) - ví kdo to ví
    3. **Authoritative DNS Server** - ten ví
  - PC <-

### Úrovně domén

- **Root(.)** - tečka na konci (která se nepíše) - pramen všech domén.
- **1\. řádu** - Domény udržují správci domén a dávají možnost registrátorům poskytovat jej. TLD (Top Level Domain) (**.com**, **.cz**)
- **2\. řádu** - Doménu poskytuje webům registrátor. (**google**.com, **seznam**.cz)
- **3\. řádu** - Doména se vytváří v rámci webů. (**www**.google.com, **jidelna**.trebesin.cz)
- Př.: správce domény .cz - **CZ.NIC**

### Typy záznamů domén

- **A** - doména -> IPv4 adresa
- **AAAA** - doména -> IPv6 adresa
- **CNAME** - spojení více domén (alias)
- **PTR** - reversní záznam - IP adresa -> doména
- další: NS, TTL, DS, MX, TXT atd.

### Ostatní info

- **DNSSEC** - ochrana domén před zfalšováním pomocí digitálního podpisu
- **whois** - služba zpětného vyhledávání domény v registru, dají se najít informace např.: kde/kdo ji registroval, u koho byla registrována atd.
- **nslookup/dig (WIN/LINUX)** - příkazy pro zjištění DNS záznamů

## DHCP

- Služba co automaticky přiřazuje IP adresy v síti.
- Využívá se pro usnadnění práce - (není potřeba každému počítači přiřazovat IP adresu manuálně).
- Některé počítače/IP adresy přiřazujeme manuálně, u některých je potřeba mít vždy stejnou IP adresu (služby, servery...).
- Většinou zajištěna routerem v domácích sítích, ve složitějších sítích bývá na dedikovaných serverech.

## Síťové vrstvy - OSI Model

1. Fyzická (Physical)
2. Linková (Data-Link)
3. Síťová (Network)
4. Transportní (Transportation)
5. Relační (Session)
6. Prezentační (Presentation)
7. Aplikační (Application)

### 1. Vrstva - Fyzická (Physical)

- Vztahuje se na fyzický přenos dat v kabelech nebo bezdrátově.
- Jednotka dat - **bit**
  - čistá data - nuly a jedničky
  - 01101000011101000111010001110000011100110011101000101111001011110111001000101110011011010111010001100100011101100010111001101101011001010010111101101111011110000111010101010001011011000110001001010001011001010111011001011010

#### Přenosová média

- **Pasivní prvky sítě**
- **UTP (Unshielded Twisted Pair)** kabel:
  - využívá **elektrický proud** k přenosu dat
  - cenově nejefektivnější
  - **full-duplex** signál
- **Optický (Optical)** kabel:
  - využívá **světlo** k přenosu dat
  - nejrychlejší a nejspolehlivější
  - méně náchylný na elekromagnetické rušení, fyzicky ale křehčí
  - využívá se v podmořských kabelech k propojení světového internetu
  - half-duplex i **full-duplex** signál
- **Wi-fi:**
  - využívá **elektromagnetické vlny** k přenosu dat
  - bezdrátové připojení
  - pouze **half-duplex** signál
- **Coaxiální kabel:**
  - zastaralý, pomalý, multiplex
- U kabelů je potřeba na velké vzdálenosti použíti **repeateru**(opakovače) nebo **amplifieru**(zesilovače), aby se neztratil signál.

#### Druhy signálů

- **Simplex**
  - data mouhou proudit pouze jedním směrem
- **Half-Duplex**
  - data mohou proudit oběma směry, ale pouze jedním směrem najednou
  - CSMA/CD collision detection – detekce střetu
  - CSMA/CA collision avoidance – vyhnutí střetu - **používanější**
- **Full-Duplex**
  - data mohou proudit oběma směry nejednou
- **Multiplex**
  - data se posílají po několika kanálech najednou (na více frekvencích)

### 2. Vrstva - Linková (Data-Link)

- Vztahuje se na přenos dat mezi zařízeními v síti.
- Jednotka dat - **frame**
  - obsahuje hlavičku s paketem
- Síťová zařízení zde mají - **MAC adresy**
  - původně byly MAC adresy hardwarové, dnes se dají nastavit softwarově
  - př.: 01:23:45:67:89:ab

#### Aktivní prvky

- **switch** - na propojení zařízení v síti
- **přístupový bod (access point - AP**) - na připojení přes Wi-Fi
- **NIC** **(network interface card)** - síťová karta v počítači

#### Protokoly

- **ARP (Address Resolution Protocol)** - přiřazuje IP adresy k MAC adresám

#### VLAN

- Virtuální LAN fungující na linkové vrstvě.
- Nastavuje se na switchi.
- Počet zařízení je omezen počtem portů na switchi.
- Používá se k segregaci zařízení ve stejné realné síti.

### 3. Vrstva - Síťová (Network)

- Jednotka dat - **packet**
- **LAN** - Local Area Network
  - Místní síť
  - Využívá soukromých (lokálních) adres
  - např.: domácí síť, školní síť
- **WAN** - Wide Area Network
  - Širší sít
  - Využívá veřejných (globálních) adres
  - **Internet**
- **MAN** - Metropolitan Area Network
  - Metropolní síť (na úrovni většího města)
- **Localhost**
  - Adresa použitá na připojení zařízení samo na sebe.
  - IPv4: **127.0.0.1**
  - IPv6: **::1**

#### Druhy vysílání

- **Broadcast** - Posílá všem zařízením.
  - poslední adresa v síti(podsíti)
- **Multicast** - Posílá vybraným zařízením hromadně.
- **Unicast** - Posílá jednomu zařízení.
- **Anycast** - Posílá prvnímu zařízení, které to přijme.

#### Protokoly

- **IP** - Internet Protokol
- ICMP - Protokol pro Ping

#### IPv4

- 32 bitové adresy - omezený počet, kterého bylo dosaženo.
  - **2<sup>32</sup>** - cca 4 miliardy
- Dělí se na **Soukromé** (private) (př.: 192.168.0.1) a **Veřejné** (public) (př.: 142.251.214.142)
  - Soukromé jsou specifické pro zařízení v LAN (místní síti).
  - Veřejné se používají ve WAN (široké síti) ke směrování dat - jsou to IP adresy routerů.
- Soukromé adresy:
  - **192.168**.x.x (**192.168.0.0/16**)
  - **10**.x.x.x (**10.0.0.0/8**)
  - **172.16-31**.x.x (**172.16.0.0/12**)

#### IPv6

- 128 bitové adresy - počtem prakticky neomezené.
- např.: **2001:0db8:85a3:08d3:1319:8a2e:0370:7334**
- Dělí se na lokální a globální.
  - Link-Local: **fe80**:xxxx:...
  - Unikátní Local: **fd00**:xxxx:...
  - Global: **2001**:xxxx:...

#### Podsíť

- Způsob vytváření 1 nebo více podsítí, které o sobě neví a nemohou spolu komunikovat.
- Daná podsíť má rozsah, který určuje maska sítě.
- První adresa v rozsahu vždy určuje adresu pro celou síť a poslední multicast(posílání všem) adresu.
- např.: v rozsahu 10.2.0.0-10.2.0.127 je adresa sítě 10.2.0.0 a multicast adresa 10.2.0.127
- Tudíž je v podsíti pro zařízení volných adres o 2 míň než je rozsah, v tomto případě 126.

#### Maska sítě

- Určuje počet rozsahů v podsíti.
- Zapisuje se jako IP adresa, s tím že každá složka značí, jaké jsou rozsahy v dané části adresy.
- např: **255.255.128.0**
- příklady významu složky.:
  - 0 - dá se zapsat jakékoliv číslo
  - 255 - nedá se změnit, je to daná složka adresy sítě
  - 254 - dají se zapsat 2 hodnoty, 0 nebo 1, 128 rozsahů
  - 128 - dá se zapsat 128 hodnot, 2 rozsahy (0-127, 128-255)
- Za lomítkem u IP adresy se zapisuje zkrácený zápis masky.
- např.:
  - `IP - maska` (zkrácený zápis)
  - `10.x.x.x - 255.0.0.0` (10.10.10.15/**8**)
  - `192.168.0.x - 255.255.255.0` (192.168.0.12/**24**)
  - `192.168.0.0-127 - 255.255.255.128` (192.168.0.120/**25**)
  - `172.20.x.x - 255.255.0.0` (172.20.3.5/**16**)
- Způsob počítání čísla zkráceného zápisu:
  - Každé zvýšení čísla o 1 značí jeden bit v binárním zápise masky sítě. 255 je 8 bitů, takže jedna složka 255 zvýší masku sítě o 8.
  - Pro čísla `< 255` - což může být pouze poslední složka masky co je `> 0`, se musí číslo rozložit do binárního tvaru. Počet 1 za sebou v binárním tvaru se přičte k masce.
  - Např. pro číslo 192 je to `**11**00 0000`, což je **+2**. Takže 255.255.192.0 bude `8 + 8 + 2 = **18**` . 255 = 8 bitů, 192 = 2 bity
- Zjištění rozsahů sítě:
  - Počet adres v 1 rozsahu (včetně rezervovaných) se dá zjistit tímto výpočtem: `256 - maska`
  - Počet rozsahů se dá zjisti jako `256 / počet adres`.
  - Rozsahy začínají v 0, takže konec prvního rozsahu je vždy o 1 menší než počet adres.
  - Začátek dalšího rozsahu je konec předešlého **+1**
  - Konec dalšího rozsahu se dá vypočítat přičtením počtu adres ke konci předešlého rozsahu.
- Příklad:
  - Mějme masku 255.255.255.**128**, zkrácený zápis: /**25**
  - 128 je binárně 1000 0000, tudíž `24 + 1 = 25`
  - Počet adres v 1 rozsahu je `256 - 128 = 128`
  - Počet rozsahů je `256 / 128 = 2`
  - Rozsahy jsou `0-127`, `128-255`

#### Porty

- **0-1024** = systémové
- **1025-49151** = registrované
- **49152-65535** = ephemeral (dynamické)
  - používají se s **PNAT**

#### Převody adres

- **ARP** (Address Resolution Protocol) = IP <=> MAC
- **NAT** (Network Address Table) = Public IPv4 <=> Private IPv4
- **SNAT** = statická NAT
  - 82.142.64.242 <=> 172.22.11.150
  - 82.142.64.243 <=> 172.22.11.152
  - každý počítač má svoji lokální a veřejnou adresu která je pevně daná
- **DNAT** = dynamická NAT
  - LAN: 172.22.11.150-153
  - WAN: 82.142.64.243, 82.142.64.244
  - počítač si vybere dynamicky jakou adresou bude komunikovat a tu si pro sebe zabere z rozsahu(pool) dostupných veřejných adres
- **PAT** = port address table  
  - počítači bude vygenerován port pro komunikaci, takže všechny počítače mohou komunikovat pod jednou adresou
  - 172.22.11.150 <=> 82.142.64.242:50001
  - 172.22.11.151 <=> 82.142.64.242:58934
  - 172.22.11.152 <=> 82.142.64.242:61000
  - 172.22.11.153 <=> 82.142.64.242:62543

#### Port Forwarding

- staticky přiřadí počítači jeden daný port pro přesměrování vší komunikace na daném portu

#### Přiřazování adres

- světově - ICANN + IANA
- regionálně - RIR (např. RIPE NNC - Evropa, ARIN - Amerika)

#### AS - Autonomní systém

- spravované operátory, big tech spoleečnostmi apod.
- např.: Deutsch Telekom - Evropský
- největší jsou "Páteř internetu"

#### Směrovací protokoly

- **BGP** - protokol pro komunikaci mezi AS
- **OSPF** - open shortest path first - pro komunikaci uvnitř AS
- Transit vs Peering - přenos dat mezi AS (placený vs free)
- Postup směrování:
  - LAN – router – router operátora – peering centrum

#### Aktivní prvky

- **Router** - na propojení sítí navzájem a směrování toku dat
  - adreesa routeru je **Default Gateway** při konfiguraci IP na zařízeních
- **Hub** - zastaralý, posílá všechno všem

#### Topologie Sítí

- Star
- Bus
  - špatná topologie - všechna zařízení mají 1 linku, kde se mohou navzájem odposlouchávat
- Ring
- Tree
- Mesh
  - vetšinou částečně propojený, lze i plně propojený
- Line
- [Diagram Topologií](https://spstrebesin-my.sharepoint.com/:i:/g/personal/dobias121_trebesin_cz/EXAOGO7a3HhJkZAn4rT4pxQB1wStiKBw828TlavsJ_j4Hg?e=D4vZBf)

### 4. Vrstva - Transportní (Transport)

- Jednotka dat - **segment**
- Zajišťuje, že se potřebná data spolehlivě přenesou mezi koncovými zařízeními.
- Vrstva, na které se zařizují síťové **porty**.

#### Protokoly

- **TCP** - spolehlivější (potvrzení přijetí), ale pomalejší
  - používá se na většině
- **UDP** - méně spolehlivý, ale rychlejší (použítí na streamy, hry atd.)

#### **TLS** - Transport Layer Security

- kryptografický protokol (SSL je jeho předchůdce)
- **TCP 3-way handshake** - zahájení spojení u TCP:
  - C - Client, S - Server
  - C ---> S - **SYN** (pozdrav)
  - C <--- S - **SYN-ACK**  (pozdrav zpátky)
  - C ---> S - **ACK** (potvrzení pozdravu zpátky)

#### Další pojmy

- **MTU** - Maximum transmission unit - 1,5 kB Maximální velikost packetu (segment + hlavičky)
- **MSS** - Maximum segment size - maximální velikost segmentu (packet bez hlaviček)
- **Fragmentace** - Dělení packetů na menší kousky, aby byly schopné proudit přes linky i s nižšími limity.
  - Není žádána, způsobuje zpomalení.
- **Jumbo frame** - umožňuje mít podstatně větší limit MTU, používá se např. při testování.

### 5. Vrstva - Relační (Session)

- Vrstva pro **ověřování**(authentikaci), **udělování přístupu**(autorizaci) a **udržování spojení** (počet připojení) v relacích(session).

### 6. Vrstva - Prezentační (Presentation)

- Vrstva pro **šifrovaní**, **kompresy** a **dekódování**.

### 7. Vrstva - Aplikační (Application)

- Vrstva pro aplikace v sítích a jejich **protokoly**.
- web, discord, sdílení souborů, e-mail atd.
- Protokoly např.:
  - **HTTP** - HyperText Transfer Protocol - port **80**
  - **HTTPS** - HTTP Secure - port **443**
  - **FTP** - File Transfer Protocol - port **21**
  - **SMTP** - Simple Mail Tranfer Protocol - port **25**

#### Email

- [Diagram Komunikace Na Excalidraw](https://excalidraw.com/#json=rKo0ce0mUEBMauJUu03-4,mK_i1nJnwvFp0-rQp0IgQQ)
- **doménový koš** - Místo pro emaily na nexexistující adresu.


#### Malware

- Trojan - na první pohled dělá co má, ve skutečnosti škodí.
- Keylogger
  - Zaznamenává vstupy (zejména klávsnici) uživatele bez jeho vědomí za účelem získání citlivých dat.
- Backdoor
  - "Zadní vrátka"
  - reverse shell - neoprávněný přístup k privilegovanému shellu (příkazový řádek) zařízení
- Virus - šíří se mezi zařízeními
- Phishing - snaha získání přístupových údajů tím, že se prezentuje jako legitimní stránka/osoba
- Ransomware - zašifruje data a dožaduje výkupné

#### Instant Messaging

- Discord, Whatsapp, Instagram DMs
- Signal - bezpečný
- E2EE - End 2 End Encryption
  - koncové šifrování
  - data mohou přečíst pouze mezi sebou

### TCP/IP

- Způsob modelování síťových vrstev v praxi.
  1. Rozhraní (OSI - 1. Fyzická a 2. Linková)
  2. Síťová
  3. Transportní
  4. Aplikační (OSI - 5. Relační, 6. Prezentační a 7. Aplikační)

#### Enkapsulace dat

- Návaznost dat na různých vrstvách TCP/IP modelu:
  - L5 Aplikační - **Data**
  - L4 Transportní - **segment = Hlavička (TCP/UDP) + zbytek**
  - L3 Síťová - **packet = IP + zbytek**
  - L2 Linková (Rozhraní) - **frame = MAC + zbytek**
  - L1 Fyzická - bity
- [Diagram pro představu](https://spstrebesin-my.sharepoint.com/:i:/g/personal/dobias121_trebesin_cz/Ef6UqJK8FUdLoKc9j3i8U9UBhIHEZfx0vef63Y_973N0BA?e=89iZhr)

### P2P - Peer-to-Peer

- Distribuovaná síť, kde má každé zúčastněné zařízení stejná oprávnění.
  - Rozdíl oproti klasické architektuře klient-server, kde má server vždy vyšší autoritu. Zařízení tak poskytuje i požaduje zároveň.
- Zařízení = **Node** (uzel)
- Často se využívá k efektivnímu sdílení souborů.
  - **Torrent** funguje jako decentralizovaná síť zařízení, kde každé posílá růzé kousky dat patřících do jednoho celku.
  - **Workgroups** je způsob sdílení souborů v Windows, který používá SMB a zajišťuje tak možnost jednoduše sdílet složky mezi počítači, soubory do tiskáren apod.
  - **Samba** - sdílení souborů mezi Windows a Linux

### VPN - Virtual Private Network

- Služba umožňující soukromý přístup k internetu za pomocí kombinace proxy a šifrovaní.
- Proxy => výsledná veřejná IP adresa je odlišná
- Spousta různých poskytovatelů - NordVPN, Mullvad VPN, Proton VPN
- VPN zadarmo často může znamenat, že si vydělávají na datech uživatelů (loggování)
- Pomocí VPN se dá obejít geoblocking - použitím VPN serveru v zemi, kde obsah není blokován.
- ISP nemůže přímo nahlížet do komunikace, ale může stále vidět DNS požadavky, na to je potřeba separátní nastavení.

### Bezdrátové sítě

#### Frekvenční pásma

- **Licenční**
  - určeno a hlídáno **ČTÚ** (Českým Telekomunikačním Úřadem)
  - je zapotřebí licence na vysílání signálu
  - Např.: DVB-T2 (TV), Rádio, Telefon
- **Bezlicenční**
  - dají se používat bez licenčních omezení
  - Např.: Mikrovlnka, Vysílačky, Wi-Fi

#### WLAN - Wireless LAN

- Bezdrátová síť Wi-Fi
- Zapezpeční pomocí hesla
  - **WPA 2** - starší, minimum
  - **WPA 3** - lepší
  - šifrováno pomocí **AES**
- dělení dle frekvence
  - **2.4Ghz**
    - delší dosah, méně přerušení přes zdi
    - menší rychlost
    - málo dostupných kanálů - hodně překrývání
      - kanály **1,6,11** jsou jediné, co se vzájemně nepřekrývají
  - **5Ghz**
    - kratší dosah, více rušení přes zdi
    - vyšší rychlost
  - **6Ghz**
    - nejnovější, málo používaný
    - nejvyšší rychlost, nejkratší dosah
    - Wi-Fi generace 6 a výše
- používá **half-duplex** signál
  - **CSMA – CA** na zamezení přerušování
- **SSID** - název sítě Wi-Fi

#### IoT Bezdrát

- **LoRa** a **Sigfox 0G**
  - technologie bezdrátových sítí pro zařízení IoT
  - menší spotřeba energie
  - pásmo **<1Ghz**
  - operátoři po celém světě (např. LoRa - Amazon)

### Cloud

- *"Someone else's computer"*
- Služby poskytované prostřednictvím internetu online.
- **Hosting**
  - poskytování výpočetních prostředků na internetu za poplatek
  - největší poskytovetelé:
    - **Amazon** - **AWS** (Amazon Web Services)
    - **Microsoft** - **Azure**
    - Google - Google Cloud
  - výhody:
    - silné výchozí zabezpečení
    - pokrytí serverů a datacenter po celém světě
    - výhodná cena
    - snazší údržba
  - nevýhody:
    - cizí počítač - nemáme nad ním plnou moc
      - potenciální bezpečnostní rizika
    - cena určená poskytovatelem
- Služby pro uživatele
  - Cloud Gaming - NVIDIA, XBOX
  - AI Assistenti - ChatGPT, Cloud
  - Email - Gmail, Outlook
  - Vyhledávače - Google, DuckDuckGo
  - Úložiště Souborů - Google Drive, OneDrive, Mega
  - a mnoho dalších
