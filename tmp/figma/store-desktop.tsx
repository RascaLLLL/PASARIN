const imgSearch = "https://www.figma.com/api/mcp/asset/5d6513d4-acd7-4cf7-9f80-77bf0aad660c.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/0c8b6ca3-14d7-46dc-b848-dc6b6a80adfd.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/753ff4a1-2079-4c2a-9a95-b65ebd7cf3d6.png";
const imgBannerDikalaSenjaCafe = "https://www.figma.com/api/mcp/asset/35ced05c-1b55-47fe-8d9c-ba67b12a9bb5.png";
const imgFotoProduk = "https://www.figma.com/api/mcp/asset/dd1d57b4-1569-4bd6-a851-0b929ef02b7f.png";
const imgFotoProduk1 = "https://www.figma.com/api/mcp/asset/6b393caa-c48d-4bc8-89dc-a6688237158e.png";
const imgFotoProduk2 = "https://www.figma.com/api/mcp/asset/9effc1ee-f3e2-4f75-97e0-b4c86aaad509.png";
const imgFotoProduk3 = "https://www.figma.com/api/mcp/asset/3d5dcf17-8fc1-4749-90fc-86fecb9bdb32.png";

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

export default function ProfilTokoPublikDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="84:26244" data-name="Profil toko publik — Desktop">
      <div className="bg-white border-[#e3e6ed] border-b border-solid content-stretch flex flex-col gap-[14px] items-start overflow-clip pt-[20px] px-[80px] relative shrink-0 w-full" data-node-id="84:26245" data-name="Navigasi pembeli">
        <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:26246" data-name="Identitas dan akun">
          <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:26247" data-name="Logo PASARIN">
            <div className="relative shrink-0 size-[40px]" data-node-id="84:26248" data-name="Simbol PASARIN">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
              </div>
            </div>
            <div className="h-[42px] relative shrink-0 w-[126px]" data-node-id="84:26249" data-name="Nama PASARIN">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
            </div>
          </div>
          <SearchBar className="bg-[#f8f9fe] content-stretch flex flex-[1_0_0] gap-[16px] h-[46px] items-end min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[12px]" placeholder="Cari produk lokal atau nama toko" />
          <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[94px]" data-node-id="84:26256" data-name="Tombol/Sekunder">
            <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26256;6:885">
              Masuk
            </p>
          </div>
          <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[106px]" data-node-id="84:26264" data-name="Tombol/Utama">
            <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I84:26264;6:788">
              Daftar
            </p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Arimo:Regular'] font-normal gap-[30px] h-[48px] items-center leading-[normal] overflow-clip relative shrink-0 text-[#494a50] text-[14px] w-full whitespace-nowrap" data-node-id="84:26272" data-name="Kategori navigasi">
          <p className="relative shrink-0" data-node-id="84:26273">
            Semua kategori
          </p>
          <p className="relative shrink-0" data-node-id="84:26274">{`Rumah & gaya hidup`}</p>
          <p className="relative shrink-0" data-node-id="84:26275">{`Makanan & minuman`}</p>
          <p className="relative shrink-0" data-node-id="84:26276">
            Busana
          </p>
          <p className="relative shrink-0" data-node-id="84:26277">{`Kerajinan & hadiah`}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[28px] items-start min-h-[650px] overflow-clip px-[80px] py-[32px] relative shrink-0 w-full" data-node-id="84:26278" data-name="Konten pembeli">
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:26279">
          Katalog / Dikala Senja Cafe
        </p>
        <div className="border border-[#e3e6ed] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="84:26280" data-name="Profil publik toko">
          <div className="h-[220px] relative shrink-0 w-full" data-node-id="84:26281" data-name="Banner Dikala Senja Cafe">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBannerDikalaSenjaCafe} />
          </div>
          <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip p-[28px] relative shrink-0 w-full" data-node-id="84:26282" data-name="Informasi toko">
            <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:26283" data-name="Identitas toko">
              <div className="bg-[#e5eae0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[76px]" data-node-id="84:26284" data-name="Logo toko">
                <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[30.4px] tracking-[-2px] whitespace-nowrap" data-node-id="84:26285">
                  dsc.
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="84:26286" data-name="Nama dan kategori">
                <p className="font-['Inter:Bold'] font-bold leading-[1.18] not-italic relative shrink-0 text-[#1f2024] text-[36px] w-full" data-node-id="84:26287">
                  Dikala Senja Cafe
                </p>
                <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:26288">{`Makanan & minuman`}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:26289" data-name="Tentang dan kontak">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:26290" data-name="Tentang toko">
                <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:26291">
                  Racikan penuh rasa dari tangan lokal.
                </p>
                <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#1f2024] text-[15px] w-full" data-node-id="84:26292">
                  Dari pahit manisnya kopi, keharmonisan matcha, hingga kesegaran jus alami kami menghadirkan karakter bahan alam dalam setiap tegukan harianmu.
                </p>
                <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:26293">
                  Pemilik: Sari Wulandari
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[340px]" data-node-id="84:26294" data-name="Lokasi dan kontak">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#1f2024] text-[15px] whitespace-nowrap" data-node-id="84:26295">
                  Jakarta Selatan, DKI Jakarta
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#71727a] text-[14px] w-[min-content]" data-node-id="84:26296">
                  WhatsApp: +62 812 3456 7890
                </p>
                <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26297" data-name="Tombol/Utama">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I84:26297;6:788">
                    Hubungi melalui WhatsApp
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#71727a] text-[14px] w-[min-content]" data-node-id="84:26305">
                  Pemesanan dan transaksi langsung dengan toko.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:26306" data-name="Katalog toko">
          <p className="font-['Inter:Bold'] font-bold leading-[1.18] not-italic relative shrink-0 text-[#1f2024] text-[36px] w-full" data-node-id="84:26307">
            Produk dari toko ini
          </p>
          <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:26308">
            4 produk ditampilkan
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="84:26309" data-name="Katalog produk">
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="84:26310" data-name="Baris produk">
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26311" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:26312" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:26313" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:26314">
                  Arabica Gayo
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:26315">
                  Biji kopi · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:26316">
                  Rp65.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26317" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26317;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26325" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:26326" data-name="Foto produk">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[132.29%] left-0 max-w-none top-[-32.39%] w-full" src={imgFotoProduk1} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:26327" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:26328">
                  Pure Matcha
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:26329">
                  Matcha · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:26330">
                  Rp13.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26331" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26331;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26339" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:26340" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk2} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:26341" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:26342">
                  Kopi Susu Sahabat
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:26343">
                  Kopi susu · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:26344">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26345" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26345;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26353" data-name="Kartu produk">
              <div className="h-[214px] relative shrink-0 w-full" data-node-id="84:26354" data-name="Foto produk">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk3} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:26355" data-name="Informasi produk">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[22px] relative shrink-0 text-[#1f2024] text-[16px] w-full" data-node-id="84:26356">
                  Orange Juice
                </p>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[18px] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:26357">
                  Jus jeruk botol · Jakarta
                </p>
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:26358">
                  Rp15.000
                </p>
                <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26359" data-name="Tombol/Sekunder">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26359;6:885">
                    Lihat detail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[14px] items-start not-italic overflow-clip px-[80px] py-[28px] relative shrink-0 w-full" data-node-id="84:26367" data-name="Kaki halaman">
        <div className="content-stretch flex gap-[28px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:26368" data-name="Pesan PASARIN">
          <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[22px] whitespace-nowrap" data-node-id="84:26369">
            pasarin
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px relative text-[#71727a] text-[14px]" data-node-id="84:26370">
            Temukan lokal. Dukung usaha Indonesia.
          </p>
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[#71727a] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="84:26371">
          © 2026 PASARIN. Untuk usaha lokal Indonesia.
        </p>
      </div>
      <div className="absolute bg-[#006ffd] h-px left-0 opacity-35 top-[899px] w-[1440px]" data-node-id="84:26372" data-name="Batas viewport awal" />
    </div>
  );
}
