const imgSearch = "https://www.figma.com/api/mcp/asset/1ca7ba96-27e2-405d-840a-ba7f3c745c31.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/e06a0e70-5f33-43f9-803c-571a613acac6.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/1731998a-d6bb-42e1-a07e-26ccc95e4631.png";
const imgFotoUtamaArabicaGayo = "https://www.figma.com/api/mcp/asset/aad49cff-e7dc-4374-bdaf-88e1a54aa016.png";
const imgFotoGaleri = "https://www.figma.com/api/mcp/asset/7836a7d0-9c85-4fa8-ba7a-449b09e0cb5a.png";
const imgFotoGaleri1 = "https://www.figma.com/api/mcp/asset/a4ac02c3-f6ce-4d8f-a0d7-169dbe8240f8.png";
const imgFotoGaleri2 = "https://www.figma.com/api/mcp/asset/0a5f53d1-94a3-4060-a476-0a7435c3f577.png";
const imgFotoProduk = "https://www.figma.com/api/mcp/asset/b9ae1275-4fbc-4fae-a612-92218ee7a168.png";
const imgFotoProduk1 = "https://www.figma.com/api/mcp/asset/810fca74-9f2a-442c-b9d4-1c00eb6e514a.png";
const imgFotoProduk2 = "https://www.figma.com/api/mcp/asset/babce2d3-a703-49a3-915a-831aff313597.png";

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

export default function DetailProdukDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="84:25978" data-name="Detail produk — Desktop">
      <div className="bg-white border-[#e3e6ed] border-b border-solid content-stretch flex flex-col gap-[14px] items-start overflow-clip pt-[20px] px-[80px] relative shrink-0 w-full" data-node-id="84:25979" data-name="Navigasi pembeli">
        <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:25980" data-name="Identitas dan akun">
          <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:25981" data-name="Logo PASARIN">
            <div className="relative shrink-0 size-[40px]" data-node-id="84:25982" data-name="Simbol PASARIN">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
              </div>
            </div>
            <div className="h-[42px] relative shrink-0 w-[126px]" data-node-id="84:25983" data-name="Nama PASARIN">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
            </div>
          </div>
          <SearchBar className="bg-[#f8f9fe] content-stretch flex flex-[1_0_0] gap-[16px] h-[46px] items-end min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[12px]" placeholder="Cari produk lokal atau nama toko" />
          <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[94px]" data-node-id="84:25990" data-name="Tombol/Sekunder">
            <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:25990;6:885">
              Masuk
            </p>
          </div>
          <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[106px]" data-node-id="84:25998" data-name="Tombol/Utama">
            <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I84:25998;6:788">
              Daftar
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Arimo:Regular'] font-normal gap-[30px] h-[48px] items-center leading-[normal] overflow-clip relative shrink-0 text-[#494a50] text-[14px] w-full whitespace-nowrap" data-node-id="84:26006" data-name="Kategori navigasi">
          <p className="relative shrink-0" data-node-id="84:26007">
            Semua kategori
          </p>
          <p className="relative shrink-0" data-node-id="84:26008">{`Rumah & gaya hidup`}</p>
          <p className="relative shrink-0" data-node-id="84:26009">{`Makanan & minuman`}</p>
          <p className="relative shrink-0" data-node-id="84:26010">
            Busana
          </p>
          <p className="relative shrink-0" data-node-id="84:26011">{`Kerajinan & hadiah`}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[28px] items-start min-h-[650px] overflow-clip px-[80px] py-[32px] relative shrink-0 w-full" data-node-id="84:26012" data-name="Konten pembeli">
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:26013">{`Katalog / Makanan & minuman / Arabica Gayo`}</p>
        <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:26014" data-name="Detail produk">
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[592px]" data-node-id="84:26015" data-name="Galeri produk">
            <div className="h-[480px] relative rounded-[18px] shrink-0 w-full" data-node-id="84:26016" data-name="Foto utama Arabica Gayo">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgFotoUtamaArabicaGayo} />
            </div>
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:26017" data-name="Thumbnail galeri">
              <div className="border-2 border-[#006ffd] border-solid content-stretch flex flex-col items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 size-[104px]" data-node-id="84:26018" data-name="Thumbnail">
                <div className="flex-[1_0_0] min-h-px relative rounded-[7px] w-full" data-node-id="84:26019" data-name="Foto galeri">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7px] size-full" src={imgFotoUtamaArabicaGayo} />
                </div>
              </div>
              <div className="border border-[#e3e6ed] border-solid content-stretch flex flex-col items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 size-[104px]" data-node-id="84:26020" data-name="Thumbnail">
                <div className="flex-[1_0_0] min-h-px relative rounded-[7px] w-full" data-node-id="84:26021" data-name="Foto galeri">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
                    <img alt="" className="absolute h-full left-[0.71%] max-w-none top-[-26.14%] w-[100.32%]" src={imgFotoGaleri} />
                  </div>
                </div>
              </div>
              <div className="border border-[#e3e6ed] border-solid content-stretch flex flex-col items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 size-[104px]" data-node-id="84:26022" data-name="Thumbnail">
                <div className="flex-[1_0_0] min-h-px relative rounded-[7px] w-full" data-node-id="84:26023" data-name="Foto galeri">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
                    <img alt="" className="absolute h-full left-[0.37%] max-w-none top-[-24.71%] w-[100.32%]" src={imgFotoGaleri1} />
                  </div>
                </div>
              </div>
              <div className="border border-[#e3e6ed] border-solid content-stretch flex flex-col items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 size-[104px]" data-node-id="84:26024" data-name="Thumbnail">
                <div className="flex-[1_0_0] min-h-px relative rounded-[7px] w-full" data-node-id="84:26025" data-name="Foto galeri">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
                    <img alt="" className="absolute left-[-0.09%] max-w-none size-full top-[-25.42%]" src={imgFotoGaleri2} />
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:26026">
              Foto utama · 1 dari 4 foto
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-node-id="84:26027" data-name="Informasi produk">
            <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:26028" data-name="Kategori produk">
              <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:26028;101:204" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="I84:26028;6:2244">{`Makanan & minuman`}</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.18] min-w-full not-italic relative shrink-0 text-[#1f2024] text-[36px] w-[min-content]" data-node-id="84:26037">
              Arabica Gayo
            </p>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#006ffd] text-[40px] w-[min-content]" data-node-id="84:26038">
              Rp65.000
            </p>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 text-[#1f2024] w-full" data-node-id="84:26039" data-name="Deskripsi produk">
              <p className="font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[18px] whitespace-nowrap" data-node-id="84:26040">
                Tentang produk
              </p>
              <p className="font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]" data-node-id="84:26041">
                Lahir dari tanah pegunungan tinggi Aceh Tengah, Arabica Gayo menghadirkan cita rasa klasik yang kaya, seimbang, dan berkarakter kuat. Ditanam secara organik di atas ketinggian 1.200–1.500 mdpl, setiap bijinya memetik nutrisi alami tanah vulkanis untuk menciptakan cangkir kopi yang intens namun tetap lembut di mulut.
              </p>
            </div>
            <div className="bg-[#f8f9fe] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[15px] shrink-0 w-full" data-node-id="84:26042" data-name="Ringkasan toko">
              <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:26043" data-name="Identitas toko">
                <div className="bg-[#e5eae0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[64px]" data-node-id="84:26044" data-name="Logo toko">
                  <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[25.6px] tracking-[-2px] whitespace-nowrap" data-node-id="84:26045">
                    dsc.
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.5] min-w-px overflow-clip relative text-[14px]" data-node-id="84:26046" data-name="Nama dan lokasi">
                  <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] w-full" data-node-id="84:26047">
                    Dikala Senja Cafe
                  </p>
                  <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] w-full" data-node-id="84:26048">
                    Sari Wulandari · Jakarta Selatan
                  </p>
                </div>
              </div>
              <a className="border-[#006ffd] border-[1.5px] border-solid content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26049" data-name="Tombol/Sekunder">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] text-left whitespace-nowrap" data-node-id="I84:26049;6:885">
                  Lihat Toko
                </p>
              </a>
            </div>
            <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26057" data-name="Tombol/Utama">
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I84:26057;6:788">
                Hubungi melalui WhatsApp
              </p>
            </div>
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#71727a] text-[14px] w-[min-content]" data-node-id="84:26065">
              +62 812 3456 7890 · Tanyakan ketersediaan dan pemesanan langsung kepada toko. Tidak perlu masuk.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="84:26066" data-name="Produk toko lainnya">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.18] not-italic relative shrink-0 text-[#1f2024] text-[36px] w-full" data-node-id="84:26067">
            Lainnya dari Dikala Senja Cafe
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="84:26068" data-name="Katalog produk">
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="84:26069" data-name="Baris produk">
              <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26070" data-name="Kartu produk">
                <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:26071" data-name="Foto produk">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[132.29%] left-0 max-w-none top-[-32.39%] w-full" src={imgFotoProduk} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:26072" data-name="Informasi produk">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:26073">
                    Pure Matcha
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:26074">
                    Matcha · Jakarta
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:26075">
                    Rp13.000
                  </p>
                  <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26076" data-name="Tombol/Sekunder">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26076;6:885">
                      Lihat detail
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26084" data-name="Kartu produk">
                <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:26085" data-name="Foto produk">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk1} />
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:26086" data-name="Informasi produk">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:26087">
                    Kopi Susu Sahabat
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:26088">
                    Kopi susu · Jakarta
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:26089">
                    Rp15.000
                  </p>
                  <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26090" data-name="Tombol/Sekunder">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26090;6:885">
                      Lihat detail
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26098" data-name="Kartu produk">
                <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:26099" data-name="Foto produk">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk2} />
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:26100" data-name="Informasi produk">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:26101">
                    Orange Juice
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:26102">
                    Jus jeruk botol · Jakarta
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:26103">
                    Rp15.000
                  </p>
                  <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26104" data-name="Tombol/Sekunder">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26104;6:885">
                      Lihat detail
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="84:26112" data-name="Ruang grid" />
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[14px] items-start not-italic overflow-clip px-[80px] py-[28px] relative shrink-0 w-full" data-node-id="84:26113" data-name="Kaki halaman">
        <div className="content-stretch flex gap-[28px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:26114" data-name="Pesan PASARIN">
          <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[22px] whitespace-nowrap" data-node-id="84:26115">
            pasarin
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px relative text-[#71727a] text-[14px]" data-node-id="84:26116">
            Temukan lokal. Dukung usaha Indonesia.
          </p>
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[#71727a] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="84:26117">
          © 2026 PASARIN. Untuk usaha lokal Indonesia.
        </p>
      </div>
      <div className="absolute flex h-px items-center justify-center left-0 top-[863px] w-[1440px]" data-node-id="84:26118">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#006ffd] h-px opacity-35 relative w-[1440px]" data-name="Batas viewport awal" />
        </div>
      </div>
    </div>
  );
}
