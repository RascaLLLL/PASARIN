const imgChat = "https://www.figma.com/api/mcp/asset/a624f7f5-424b-4cb1-90bc-7d9d2e24610e.svg";
const imgStore = "https://www.figma.com/api/mcp/asset/b26db31d-06a9-4d03-82d4-7bf0b7048332.svg";
const imgSearch = "https://www.figma.com/api/mcp/asset/13e49e0d-ff28-441e-a4a5-a271bebd863b.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/fae31c56-fd2d-49ed-bc38-39a09fe7d91e.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/0e521aa5-709a-4055-8900-f24510396083.png";
const imgKoleksiProdukLokal = "https://www.figma.com/api/mcp/asset/dcedaf3b-9379-4612-9468-37627128f6e3.png";
const imgFotoProduk = "https://www.figma.com/api/mcp/asset/176cfa94-1e33-4eed-8cc1-d1c3a480c73b.png";
const imgFotoProduk1 = "https://www.figma.com/api/mcp/asset/f7daa155-7692-481f-abbb-3852f919e22e.png";
const imgFotoProduk2 = "https://www.figma.com/api/mcp/asset/5d18e627-79d7-4d60-971b-ae6a09862b2c.png";
const imgFotoProduk3 = "https://www.figma.com/api/mcp/asset/e6fe1732-4b03-4f9d-88f8-20c58902b14e.png";
const imgFotoProduk4 = "https://www.figma.com/api/mcp/asset/49823894-ff81-4e7d-ab71-b3aa1b053540.png";
const imgFotoProduk5 = "https://www.figma.com/api/mcp/asset/15887799-8f60-480f-be1c-e0df2401008c.png";
const imgFotoProduk6 = "https://www.figma.com/api/mcp/asset/c2f5944a-423e-4e36-a450-ce76d9d84404.png";
const imgFotoProduk7 = "https://www.figma.com/api/mcp/asset/89c71bb4-1fce-426a-83fa-541704fc7b49.png";
const imgFotoProduk8 = "https://www.figma.com/api/mcp/asset/8c7f4591-514f-4f7a-b8c4-ff8ebee05ffa.png";
const imgFotoProduk9 = "https://www.figma.com/api/mcp/asset/1be54e1b-55f2-431f-96cb-67d9b3d11f1f.png";
const imgFotoProduk10 = "https://www.figma.com/api/mcp/asset/84aed9dd-9489-4be1-9570-8c3973ac86dd.png";
const imgFotoProduk11 = "https://www.figma.com/api/mcp/asset/f1ae1f19-3c79-42e5-b727-ad27b0fb3557.png";
const imgFotoProduk12 = "https://www.figma.com/api/mcp/asset/7190ff2a-44c1-4ba8-a5aa-e92aebb5a228.png";
const imgFotoProduk13 = "https://www.figma.com/api/mcp/asset/0630715f-bbba-414c-afc0-c2f5ae02b726.png";
const imgFotoProduk14 = "https://www.figma.com/api/mcp/asset/9958965d-855f-4c41-bd5c-3ceb506a9a7b.png";
const imgFotoProduk15 = "https://www.figma.com/api/mcp/asset/9731cf30-b939-4385-b553-c2e9bbebb297.png";

function Chat({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="2:69" data-name="Chat">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChat} />
    </div>
  );
}

function Store({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="2:63" data-name="Store">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStore} />
    </div>
  );
}

type SearchBarProps = {
  className?: string;
  placeholder?: string;
  state?: "Empty";
};

function SearchBar({ className, placeholder = "Search", state = "Empty" }: SearchBarProps) {
  return (
    <div className={className || "bg-[#f8f9fe] content-stretch flex gap-[16px] items-end overflow-clip px-[16px] py-[12px] relative rounded-[24px] w-[311px]"} data-node-id="2:22">
      <div className="relative shrink-0 size-[16px]" data-node-id="2:23" data-name="Search">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="2:24" data-name="Text">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8f9098] text-[14px] whitespace-nowrap" data-node-id="2:25">
          <p className="leading-[20px]">{placeholder}</p>
        </div>
      </div>
    </div>
  );
}

export default function KatalogDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="84:24842" data-name="Katalog — Desktop">
      <div className="bg-white border-[#e3e6ed] border-b border-solid content-stretch flex flex-col gap-[14px] items-start overflow-clip pt-[20px] px-[80px] relative shrink-0 w-full" data-node-id="84:24843" data-name="Navigasi pembeli">
        <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:24844" data-name="Identitas dan akun">
          <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:24845" data-name="Logo PASARIN">
            <div className="relative shrink-0 size-[40px]" data-node-id="84:24846" data-name="Simbol PASARIN">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
              </div>
            </div>
            <div className="h-[42px] relative shrink-0 w-[126px]" data-node-id="84:24847" data-name="Nama PASARIN">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
            </div>
          </div>
          <SearchBar className="bg-[#f8f9fe] content-stretch cursor-pointer flex flex-[1_0_0] gap-[16px] h-[46px] items-end min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[12px]" placeholder="Cari produk lokal atau nama toko" />
          <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[94px]" data-node-id="84:24854" data-name="Tombol/Sekunder">
            <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:24854;6:885">
              Masuk
            </p>
          </div>
          <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[106px]" data-node-id="84:24862" data-name="Tombol/Utama">
            <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I84:24862;6:788">
              Daftar
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Arimo:Regular'] font-normal gap-[30px] h-[48px] items-center leading-[normal] overflow-clip relative shrink-0 text-[#494a50] text-[14px] w-full whitespace-nowrap" data-node-id="84:24870" data-name="Kategori navigasi">
          <p className="relative shrink-0" data-node-id="84:24871">
            Semua kategori
          </p>
          <p className="relative shrink-0" data-node-id="84:24872">{`Rumah & gaya hidup`}</p>
          <p className="relative shrink-0" data-node-id="84:24873">{`Makanan & minuman`}</p>
          <p className="relative shrink-0" data-node-id="84:24874">
            Busana
          </p>
          <p className="relative shrink-0" data-node-id="84:24875">{`Kerajinan & hadiah`}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[28px] items-start min-h-[650px] overflow-clip px-[80px] py-[32px] relative shrink-0 w-full" data-node-id="84:24876" data-name="Konten pembeli">
        <div className="bg-[#eaf2ff] content-stretch flex items-start overflow-clip relative rounded-[24px] shrink-0 w-full" data-node-id="84:24877" data-name="Pilihan lokal">
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[36px] relative shrink-0 w-[625px]" data-node-id="84:24878" data-name="Ajakan jelajah">
            <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[12px] whitespace-nowrap" data-node-id="84:24879">
              PILIHAN LOKAL, KEBAHAGIAAN SEHARI-HARI
            </p>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.18] min-w-full not-italic relative shrink-0 text-[#1f2024] text-[36px] w-[min-content]" data-node-id="84:24880">
              Produk bermakna, lebih dekat dari rumah.
            </p>
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#71727a] text-[16px] w-[min-content]" data-node-id="84:24881">
              Temukan produk pilihan dari pelaku usaha Indonesia. Usaha kecil, sepenuh hati.
            </p>
            <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[190px]" data-node-id="84:24882" data-name="Tombol/Utama">
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I84:24882;6:788">
                Jelajahi produk →
              </p>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[338px] min-w-px relative" data-node-id="84:24890" data-name="Koleksi produk lokal">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKoleksiProdukLokal} />
          </div>
        </div>
        <div className="content-center flex flex-wrap gap-[60px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:24891" data-name="Cara berbelanja">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="84:24892" data-name="Usaha lokal">
            <Store className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#494a50] text-[14px] whitespace-nowrap" data-node-id="84:24896">
              Dukung usaha lokal
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="84:24897" data-name="Kontak langsung">
            <Chat className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#494a50] text-[14px] whitespace-nowrap" data-node-id="84:24901">
              Pesan melalui WhatsApp toko
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:24902" data-name="Temukan produk">
          <p className="font-['Inter:Bold'] font-bold leading-[1.18] not-italic relative shrink-0 text-[#1f2024] text-[36px] w-full" data-node-id="84:24903">
            Temukan favorit lokalmu
          </p>
          <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:24904">
            Jelajahi tanpa masuk. Hubungi penjual langsung untuk bertransaksi.
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:24905" data-name="Filter kategori">
          <div className="bg-[#006ffd] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:24906" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:24906;101:205" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap" data-node-id="I84:24906;8:363">
                Semua produk
              </p>
            </div>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:24919" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:24919;101:204" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[12px] text-center tracking-[0.6px] whitespace-nowrap" data-node-id="I84:24919;6:2244">{`Rumah & gaya hidup`}</p>
            </div>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:24928" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:24928;101:204" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[12px] text-center tracking-[0.6px] whitespace-nowrap" data-node-id="I84:24928;6:2244">{`Makanan & minuman`}</p>
            </div>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:24937" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:24937;101:204" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[12px] text-center tracking-[0.6px] whitespace-nowrap" data-node-id="I84:24937;6:2244">
                Busana
              </p>
            </div>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:24946" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:24946;101:204" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[12px] text-center tracking-[0.6px] whitespace-nowrap" data-node-id="I84:24946;6:2244">{`Kerajinan & hadiah`}</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="84:24955" data-name="Katalog produk">
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="84:24956" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:24957" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:24958" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:24959" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:24960">
                  Arabica Gayo
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:24961">
                  Biji kopi · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:24962">
                  Rp65.000
                </p>
                <a className="border-[#006ffd] border-[1.5px] border-solid content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:24963" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] text-left whitespace-nowrap" data-node-id="I84:24963;6:885">
                    Lihat detail
                  </p>
                </a>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:24971" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:24972" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[211.24%] left-[0.07%] max-w-none top-[-64.55%] w-full" src={imgFotoProduk1} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:24973" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:24974">
                  Coconut Sugar
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:24975">
                  Gula kelapa · Banten
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:24976">
                  Rp30.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:24977" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:24977;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:24985" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:24986" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[210.7%] left-0 max-w-none top-[-58.6%] w-full" src={imgFotoProduk2} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:24987" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:24988">
                  Hand Cream
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:24989">
                  Krim tangan · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:24990">
                  Rp45.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:24991" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:24991;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:24999" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25000" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[132.29%] left-0 max-w-none top-[-32.39%] w-full" src={imgFotoProduk3} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25001" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25002">
                  Pure Matcha
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25003">
                  Matcha · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25004">
                  Rp13.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25005" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25005;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="84:25013" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25014" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25015" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[174.49%] left-[-0.02%] max-w-none top-0 w-[100.03%]" src={imgFotoProduk4} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25016" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25017">
                  Kipas Anyaman Bambu
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25018">
                  Kipas bambu · Tasikmalaya
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25019">
                  Rp25.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25020" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25020;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25028" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25029" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk5} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25030" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25031">
                  Kain Batik
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25032">
                  Kain batik · Yogyakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25033">
                  Rp35.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25034" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25034;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25042" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25043" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[117.36%] left-0 max-w-none top-0 w-full" src={imgFotoProduk6} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25044" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25045">
                  Crispy Banana
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25046">
                  Keripik pisang · Bandung
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25047">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25048" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25048;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25056" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25057" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk7} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25058" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25059">
                  Kopi Susu Sahabat
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25060">
                  Kopi susu · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25061">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25062" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25062;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="84:25070" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25071" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25072" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk8} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25073" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25074">
                  Popcorn Pop
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25075">
                  Popcorn · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25076">
                  Rp20.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25077" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25077;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25085" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25086" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk9} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25087" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25088">
                  Singkong Crispy
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25089">
                  Keripik singkong · Bogor
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25090">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25091" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25091;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25099" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25100" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk10} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25101" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25102">
                  Kemeja Pria
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25103">
                  Kemeja pria · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25104">
                  Rp105.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25105" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25105;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25113" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25114" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk11} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25115" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25116">
                  Kemeja Linen
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25117">
                  Kemeja linen · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25118">
                  Rp150.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25119" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25119;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="84:25127" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25128" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25129" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk12} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25130" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25131">
                  Jam Tangan Glardo
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25132">
                  Jam tangan · Tangerang
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25133">
                  Rp235.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25134" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25134;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25142" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25143" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk13} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25144" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25145">
                  Cardigan
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25146">
                  Kardigan wanita · Bandung
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25147">
                  Rp125.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25148" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25148;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25156" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25157" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk14} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25158" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25159">
                  Cloudy Bag
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25160">
                  Tas wanita · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25161">
                  Rp199.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25162" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25162;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25170" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:25171" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk15} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:25172" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:25173">
                  Orange Juice
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:25174">
                  Jus jeruk botol · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:25175">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25176" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25176;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[14px] items-start not-italic overflow-clip px-[80px] py-[28px] relative shrink-0 w-full" data-node-id="84:25184" data-name="Kaki halaman">
        <div className="content-stretch flex gap-[28px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:25185" data-name="Pesan PASARIN">
          <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[22px] whitespace-nowrap" data-node-id="84:25186">
            pasarin
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px relative text-[#71727a] text-[14px]" data-node-id="84:25187">
            Temukan lokal. Dukung usaha Indonesia.
          </p>
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[#71727a] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="84:25188">
          © 2026 PASARIN. Untuk usaha lokal Indonesia.
        </p>
      </div>
      <div className="absolute bg-[#006ffd] h-px left-0 opacity-35 top-[899px] w-[1440px]" data-node-id="84:25189" data-name="Batas viewport awal" />
    </div>
  );
}
