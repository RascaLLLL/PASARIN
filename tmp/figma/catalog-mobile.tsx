const imgChat = "https://www.figma.com/api/mcp/asset/ae140117-a0b9-40e7-9d54-caa17736eabc.svg";
const imgStore = "https://www.figma.com/api/mcp/asset/e5aab4cf-0eef-4df5-ae21-b6ac2f31f863.svg";
const imgSearch = "https://www.figma.com/api/mcp/asset/a3c9efa0-b598-4ce6-8e17-cce7f9bf3b0b.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/d673ecfb-ce47-41bc-b293-a4173007dc12.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/05f9e53d-90f7-4c89-9dfe-9f38aac8c8f4.png";
const imgKoleksiProdukLokal = "https://www.figma.com/api/mcp/asset/274938a5-e5a5-4ad1-b1be-605f24ede288.png";
const imgFotoProduk = "https://www.figma.com/api/mcp/asset/af697c79-0396-4868-9ff3-23d4eea21ea6.png";
const imgFotoProduk1 = "https://www.figma.com/api/mcp/asset/bee0eab4-7f50-4d6d-aead-cad719e45698.png";
const imgFotoProduk2 = "https://www.figma.com/api/mcp/asset/c64975a2-de52-4e56-bf29-7fc2b2fcdae5.png";
const imgFotoProduk3 = "https://www.figma.com/api/mcp/asset/7cb8216a-0a25-4ce9-9f52-7df0ca578ff9.png";
const imgFotoProduk4 = "https://www.figma.com/api/mcp/asset/e05ab901-7867-40ba-95c9-3809d5a63ef4.png";
const imgFotoProduk5 = "https://www.figma.com/api/mcp/asset/3440710c-0733-4479-aac2-51d56ffba5e7.png";
const imgFotoProduk6 = "https://www.figma.com/api/mcp/asset/369d76bd-bcb8-4c48-ab05-be69cc5860af.png";
const imgFotoProduk7 = "https://www.figma.com/api/mcp/asset/2521848f-791b-404f-a9f3-c4860b67bd5a.png";
const imgFotoProduk8 = "https://www.figma.com/api/mcp/asset/480a1de2-a93b-40fa-8798-589606b2c595.png";
const imgFotoProduk9 = "https://www.figma.com/api/mcp/asset/e5f4c293-8b8b-4472-a9eb-412299af22ae.png";
const imgFotoProduk10 = "https://www.figma.com/api/mcp/asset/9a277d32-5bfc-4c94-9dbf-667738b59b1a.png";
const imgFotoProduk11 = "https://www.figma.com/api/mcp/asset/a058270a-d55c-48d1-a689-78c43efbc56c.png";
const imgFotoProduk12 = "https://www.figma.com/api/mcp/asset/d570c4c6-2079-4ade-ba04-00988cebca54.png";
const imgFotoProduk13 = "https://www.figma.com/api/mcp/asset/9e817657-acb1-483d-a3a5-ef08d95a8134.png";
const imgFotoProduk14 = "https://www.figma.com/api/mcp/asset/1d1dfd3a-d954-4f5e-8a0f-a495f7b185e1.png";
const imgFotoProduk15 = "https://www.figma.com/api/mcp/asset/7118a8cb-c477-406d-8ab5-b7ed6e11754f.png";
const imgMenu = "https://www.figma.com/api/mcp/asset/b1e58e7d-1f13-4156-98bc-31f2b0393647.svg";

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

export default function KatalogMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="84:25191" data-name="Katalog — Mobile">
      <div className="bg-white border-[#e3e6ed] border-b border-solid content-stretch flex flex-col gap-[14px] items-start overflow-clip px-[20px] py-[16px] relative shrink-0 w-full" data-node-id="84:25192" data-name="Navigasi pembeli">
        <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="84:25193" data-name="Identitas dan akun">
          <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:25194" data-name="Logo PASARIN">
            <div className="relative shrink-0 size-[32px]" data-node-id="84:25195" data-name="Simbol PASARIN">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
              </div>
            </div>
            <div className="h-[35px] relative shrink-0 w-[105px]" data-node-id="84:25196" data-name="Nama PASARIN">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:25197" data-name="Menu pembeli">
            <div className="relative shrink-0 size-[22px]" data-node-id="84:27843" data-name="menu">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
            </div>
            <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="84:25199">
              Menu
            </p>
          </div>
        </div>
        <SearchBar className="bg-[#f8f9fe] content-stretch flex gap-[16px] h-[44px] items-end overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" placeholder="Cari produk atau toko" />
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start min-h-[580px] overflow-clip px-[20px] py-[24px] relative shrink-0 w-full" data-node-id="84:25206" data-name="Konten pembeli">
        <div className="bg-[#eaf2ff] content-stretch flex items-start overflow-clip relative rounded-[24px] shrink-0 w-full" data-node-id="84:25207" data-name="Pilihan lokal">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip p-[20px] relative" data-node-id="84:25208" data-name="Ajakan jelajah">
            <p className="font-['Inter:Bold'] font-bold leading-[1.18] not-italic relative shrink-0 text-[#1f2024] text-[28px] w-full" data-node-id="84:25209">
              Produk lokal, lebih dekat.
            </p>
            <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:25210">
              Usaha kecil, sepenuh hati.
            </p>
          </div>
          <div className="relative self-stretch shrink-0 w-[110px]" data-node-id="84:25211" data-name="Koleksi produk lokal">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKoleksiProdukLokal} />
          </div>
        </div>
        <div className="content-center flex flex-wrap gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:25212" data-name="Cara berbelanja">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="84:25213" data-name="Usaha lokal">
            <Store className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#494a50] text-[14px] whitespace-nowrap" data-node-id="84:25217">
              Dukung usaha lokal
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="84:25218" data-name="Kontak langsung">
            <Chat className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#494a50] text-[14px] whitespace-nowrap" data-node-id="84:25222">
              Pesan melalui WhatsApp toko
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:25223" data-name="Temukan produk">
          <p className="font-['Inter:Bold'] font-bold leading-[1.18] not-italic relative shrink-0 text-[#1f2024] text-[28px] w-full" data-node-id="84:25224">
            Temukan favorit lokalmu
          </p>
          <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:25225">
            Jelajahi tanpa masuk. Hubungi penjual langsung untuk bertransaksi.
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:25226" data-name="Filter kategori">
          <div className="bg-[#006ffd] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:25227" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:25227;101:205" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap" data-node-id="I84:25227;8:363">
                Semua produk
              </p>
            </div>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:25240" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:25240;101:204" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[12px] text-center tracking-[0.6px] whitespace-nowrap" data-node-id="I84:25240;6:2244">{`Rumah & gaya hidup`}</p>
            </div>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:25249" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:25249;101:204" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[12px] text-center tracking-[0.6px] whitespace-nowrap" data-node-id="I84:25249;6:2244">{`Makanan & minuman`}</p>
            </div>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:25258" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:25258;101:204" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[12px] text-center tracking-[0.6px] whitespace-nowrap" data-node-id="I84:25258;6:2244">
                Busana
              </p>
            </div>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:25267" data-name="Kategori">
            <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:25267;101:204" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[12px] text-center tracking-[0.6px] whitespace-nowrap" data-node-id="I84:25267;6:2244">{`Kerajinan & hadiah`}</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="84:25276" data-name="Katalog produk">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:25277" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25278" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25279" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25280" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25281">
                  Arabica Gayo
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25282">
                  Biji kopi · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25283">
                  Rp65.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25284" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25284;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25292" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25293" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[211.24%] left-[0.07%] max-w-none top-[-64.55%] w-full" src={imgFotoProduk1} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25294" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25295">
                  Coconut Sugar
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25296">
                  Gula kelapa · Banten
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25297">
                  Rp30.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25298" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25298;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:25306" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25307" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25308" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[210.7%] left-0 max-w-none top-[-58.6%] w-full" src={imgFotoProduk2} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25309" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25310">
                  Hand Cream
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25311">
                  Krim tangan · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25312">
                  Rp45.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25313" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25313;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25321" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25322" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[132.29%] left-0 max-w-none top-[-32.39%] w-full" src={imgFotoProduk3} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25323" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25324">
                  Pure Matcha
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25325">
                  Matcha · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25326">
                  Rp13.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25327" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25327;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:25335" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25336" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25337" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[174.49%] left-[-0.02%] max-w-none top-0 w-[100.03%]" src={imgFotoProduk4} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25338" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25339">
                  Kipas Anyaman Bambu
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25340">
                  Kipas bambu · Tasikmalaya
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25341">
                  Rp25.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25342" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25342;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25350" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25351" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk5} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25352" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25353">
                  Kain Batik
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25354">
                  Kain batik · Yogyakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25355">
                  Rp35.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25356" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25356;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:25364" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25365" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25366" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[117.36%] left-0 max-w-none top-0 w-full" src={imgFotoProduk6} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25367" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25368">
                  Crispy Banana
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25369">
                  Keripik pisang · Bandung
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25370">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25371" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25371;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25379" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25380" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk7} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25381" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25382">
                  Kopi Susu Sahabat
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25383">
                  Kopi susu · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25384">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25385" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25385;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:25393" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25394" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25395" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk8} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25396" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25397">
                  Popcorn Pop
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25398">
                  Popcorn · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25399">
                  Rp20.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25400" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25400;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25408" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25409" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk9} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25410" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25411">
                  Singkong Crispy
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25412">
                  Keripik singkong · Bogor
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25413">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25414" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25414;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:25422" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25423" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25424" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk10} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25425" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25426">
                  Kemeja Pria
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25427">
                  Kemeja pria · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25428">
                  Rp105.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25429" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25429;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25437" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25438" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk11} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25439" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25440">
                  Kemeja Linen
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25441">
                  Kemeja linen · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25442">
                  Rp150.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25443" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25443;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:25451" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25452" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25453" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk12} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25454" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25455">
                  Jam Tangan Glardo
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25456">
                  Jam tangan · Tangerang
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25457">
                  Rp235.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25458" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25458;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25466" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25467" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk13} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25468" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25469">
                  Cardigan
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25470">
                  Kardigan wanita · Bandung
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25471">
                  Rp125.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25472" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25472;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:25480" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25481" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25482" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk14} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25483" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25484">
                  Cloudy Bag
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25485">
                  Tas wanita · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25486">
                  Rp199.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25487" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25487;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:25495" data-name="Kartu produk">
              <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:25496" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk15} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:25497" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:25498">
                  Orange Juice
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:25499">
                  Jus jeruk botol · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:25500">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:25501" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25501;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[14px] items-start not-italic overflow-clip px-[20px] py-[28px] relative shrink-0 w-full" data-node-id="84:25509" data-name="Kaki halaman">
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:25510" data-name="Pesan PASARIN">
          <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[22px] whitespace-nowrap" data-node-id="84:25511">
            pasarin
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px relative text-[#71727a] text-[14px]" data-node-id="84:25512">
            Temukan lokal. Dukung usaha Indonesia.
          </p>
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[#71727a] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="84:25513">
          © 2026 PASARIN. Untuk usaha lokal Indonesia.
        </p>
      </div>
      <div className="absolute bg-[#006ffd] h-px left-0 opacity-35 top-[843px] w-[390px]" data-node-id="84:25514" data-name="Batas viewport awal" />
    </div>
  );
}
