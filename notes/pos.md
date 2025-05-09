# DNS

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

## Úrovně domén

- **Root(.)** - tečka na konci (která se nepíše) - pramen všech domén.
- **1\. řádu** - Domény udržují správci domén a dávají možnost registrátorům poskytovat jej. TLD (Top Level Domain) (**.com**, **.cz**)
- **2\. řádu** - Doménu poskytuje webům registrátor. (**google**.com, **seznam**.cz)
- **3\. řádu** - Doména se vytváří v rámci webů. (**www**.google.com, **jidelna**.trebesin.cz)
- Př.: správce domény .cz - **CZ.NIC**

## Typy záznamů domén

- **A** - doména -> IPv4 adresa
- **AAAA** - doména -> IPv6 adresa
- **CNAME** - spojení více domén (alias)
- **PTR** - reversní záznam - IP adresa -> doména
- další: NS, TTL, DS, MX, TXT atd.

## Ostatní info

- **DNSSEC** - ochrana domén před zfalšováním pomocí digitálního podpisu
- **whois** - služba zpětného vyhledávání domény v registru, dají se najít informace např.: kde/kdo ji registroval, u koho byla registrována atd.
- **nslookup/dig (WIN/LINUX)** - příkazy pro zjištění DNS záznamů

# DHCP

- Služba co automaticky přiřazuje IP adresy v síti.
- Využívá se pro usnadnění práce - (není potřeba každému počítači přiřazovat IP adresu manuálně).
- Některé počítače/IP adresy přiřazujeme manuálně, u některých je potřeba mít vždy stejnou IP adresu (služby, servery...).
- Většinou zajištěna routerem v domácích sítích, ve složit2jších sítích bývá na dedikovaných serverech.

# Síťové vrstvy

## 1. Vrstva - Fyzická (Physical)

- Vztahuje se na fyzický přenos dat v kabelech nebo bezdrátově.
- Jednotka dat - **bit**
  - čistá data - nuly a jedničky

### Přenosová média:

- **UTP (Unshielded Twisted Pair)** kabel:
  - využívá **elektrický proud** k přenosu dat
  - cenově nejefektivnější
  - **full-duplex** signál
- **Optický (Optical)** kabel:
  - využívá **světlo** k přenosu dat
  - nejrychlejší a nejspolehlivější
  - využívá se v podmořských kabelech k propojení světového internetu
  - half-duplex i **full-duplex** signál
- **Wi-fi:**
  - využívá **elektromagnetické vlny** k přenosu dat
  - bezdrátové připojení
  - pouze **half-duplex** signál
- **Coaxiální kabel:**
  - zastaralý, pomalý
- U kabelů je potřeba na velké vzdálenosti použíti **repeateru**(opakovače) nebo **amplifieru**(zesilovače), aby se neztratil signál.

### Druhy signálů

- **Simplex**
  - data mouhou proudit pouze jedním směrem
- **Half-Duplex**
  - data mohou proudit oběma směry, ale pouze jedním směrem najednou
- **Full-Duplex**
  - data mohou proudit oběma směry nejednou
- **Multiplex**
  - data se posílají po několika kanálech najednou

## 2. Vrstva - Linková (Data link)

- Vztahuje se na přenos dat mezi zařízeními v síti.
- Jednotka dat - **frame**
  - obsahuje hlavičku s paketem
- Síťová zařízení zde mají - **MAC adresy**
  - původně byly MAC adresy hardwarové, dnes se dají nastavit softwarově
  - př.: 01:23:45:67:89:ab

### Aktivní prvky

- **switch**- na propojení zařízení v síti
- **NIC** **(network interface card)** - síťová karta v počítači

### Protokoly

- **ARP (Address Resolution Protocol)** - přiřazuje IP adresy k MAC adresám

## 3. Vrstva - Síťová (Network)

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

### Druhy vysílání

- **Broadcast** - Posílá všem zařízením.
- **Multicast** - Posílá vybraným zařízením hromadně.
- **Unicast** - Posílá jednomu zařízení.
- (Anycast - Posílá prvnímu zařízení, co to přijme.)

### IPv4

- 32 bitové adresy - omezený počet, kterého bylo dosaženo.
- Dělí se na **Soukromé** (private) (př.: 192.168.0.1) a **Veřejné** (public) (př.: 142.251.214.142)
  - Soukromé jsou specifické pro zařízení v LAN (místní síti).
  - Veřejné se používají ve WAN (široké síti) ke směrování dat - jsou to IP adresy routerů.
- Soukromé adresy:
  - **192.168**.x.x (**192.168.0.0/16**)
  - **10**.x.x.x (**10.0.0.0/8**)
  - **172.16-31**.x.x (**172.16.0.0/12**)

### IPv6

- 128 bitové adresy - prakticky neomezené.
- např.: **2001:0db8:85a3:08d3:1319:8a2e:0370:7334**
- Dělí se na lokální a globální.
  - Local: **fe80**:xxxx:...
  - Global: **2001**:xxxx:...

### Podsíť

- Způsob vytváření 1 nebo více podsítí, které o sobě neví a nemohou spolu komunikovat.
- Daná podsíť má rozsah, který určuje maska sítě.
- První adresa v rozsahu vždy určuje adresu pro celou síť a poslední multicast(posílání všem) adresu.
- např.: v rozsahu 10.2.0.0-10.2.0.127 je adresa sítě 10.2.0.0 a multicast adresa 10.2.0.127
- Tudíž je v podsíti pro zařízení volných adres o 2 míň než je rozsah, v tomto případě 126.

### Maska sítě

- Určuje počet rozsahů v podsíti.
- Zapisuje se jako IP adresa, s tím že každá složka značí, jaké jsou rozsahy v dané části adresy.
- např: **255.255.128.0**
- příklady významu složky.:
  - 0 - dá se zapsat jakékoliv číslo
  - 255 - nedá se změnit, je to daná složka adresy sítě
  - 254 - dají se zapsat 2 hodnoty, 0 nebo 1, 128 rozsahů
  - 128 - dá se zapsat 128 hodnot, 2 rozsahy (0-127, 128-255)
- Za lomítkem u IP adresy se zapisuje zkrácený zápis masky.
např.:
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

### Porty

- **0-1024** = systémové
- **1025-49151** = registrované
- **49152-65535** = ephemeral (dynamické)
  - používají se s **PNAT**

### Převody adres

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

### Port Forwarding

- staticky přiřadí počítači jeden daný port pro přesměrování vší komunikace na daném portu

### Přiřazování adres

- světově - ICANN + IANA
- regionálně - RIR (např. RIPE NNC - Evropa, ARIN - Amerika)

### AS - Autonomní systém

- např.: Deutsch Telekom - Evropský
- největší - "Páteř internetu"

### Směrovací protokoly

- **BGP** - protokol pro komunikaci mezi AS
- **OSPF** - open shortest path first - pro komunikaci uvnitř AS
- Transit vs Peering - přenos dat mezi AS (placený vs free)

## (4.) Transportní vrstva

### Protokoly

- **TCP** - spolehlivější (potvrzení přijetí), ale pomalejší
- **UDP** - méně spolehlivý, ale rychlejší (použítí na streamy, hry atd.)

### **TLS** - Transport Layer Security

- kryptografický protokol (SSL je jeho předchůdce)
- **TCP 3-way handshake** - zahájení spojení u TCP:
  - C - Client, S - Server
  - C ---> S - **SYN** (pozdrav)
  - C <--- S - **SYN-ACK**  (pozdrav zpátky)
  - C ---> S - **ACK** (potvrzení pozdravu zpátky)

### Další pojmy

- **MTU** - Maximum transmission unit - 1,5 kB Maximální velikost packetu (segment + hlavičky)
- **MSS** - Maximum segment size - maximální velikost segmentu (packet bez hlaviček)
- **Fragmentace** - Dělení packetů na menší kousky, aby byly schopné proudit přes linky i s nižšími limity.
- **Jumbo frame** - umožňuje mít podstatně větší limit MTU, používá se např. při testování.
