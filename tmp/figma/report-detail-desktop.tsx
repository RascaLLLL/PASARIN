const imgProfile = "https://www.figma.com/api/mcp/asset/b2a58c28-abeb-4272-9f25-71fd7168d552.svg";
const imgChat = "https://www.figma.com/api/mcp/asset/181fd1db-3333-416f-ac7c-ccb55d3f7bab.svg";
const imgShoppingBagOutlined = "https://www.figma.com/api/mcp/asset/69f753f9-5b07-4bc0-bd43-79c505819ee9.svg";
const imgStore = "https://www.figma.com/api/mcp/asset/bf120cdb-feb9-46dc-b09a-69e4640d7215.svg";
const imgCategories = "https://www.figma.com/api/mcp/asset/d86bb0c2-9935-4612-b88e-b84709e7f621.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/b9f97fac-e625-44af-ac8e-714cf2d7495f.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/f6f81003-a6f6-48ab-a6c9-52636a767dc8.png";
const imgFotoArabicaGayo = "https://www.figma.com/api/mcp/asset/ab4fdf52-587e-4986-af18-8f56f95b5f57.png";
const imgIkon = "https://www.figma.com/api/mcp/asset/85139902-18a7-43c7-adcb-29248a9ae613.svg";
const imgIkon1 = "https://www.figma.com/api/mcp/asset/caeb1bb4-23ee-4b3f-b6d9-dd2d55e4bb81.svg";
const imgIkon2 = "https://www.figma.com/api/mcp/asset/23c7b172-ce34-4518-a841-16f524541e98.svg";
const imgIkon3 = "https://www.figma.com/api/mcp/asset/04576606-6f31-44c8-a830-c5f9b5f607a5.svg";

function Profile({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24.001px]"} data-node-id="21:548" data-name="Profile">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProfile} />
    </div>
  );
}

function Chat({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="2:69" data-name="Chat">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChat} />
    </div>
  );
}

function ShoppingBagOutlined({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="2:35" data-name="Shopping Bag Outlined">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShoppingBagOutlined} />
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

function Categories({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="2:50" data-name="Categories">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategories} />
    </div>
  );
}

export default function DetailLaporanDesktop() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-start relative size-full" data-node-id="84:184028" data-name="Detail laporan — Desktop">
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start min-h-[900px] overflow-clip p-[24px] relative self-stretch shrink-0 w-[232px]" data-node-id="84:184029" data-name="Sidebar admin">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:184030" data-name="Logo PASARIN">
          <div className="relative shrink-0 size-[40px]" data-node-id="84:184031" data-name="Simbol PASARIN">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
            </div>
          </div>
          <div className="h-[42px] relative shrink-0 w-[126px]" data-node-id="84:184032" data-name="Nama PASARIN">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#758297] text-[10px] tracking-[0.5px] whitespace-nowrap" data-node-id="84:184033">
          RUANG KERJA ADMIN
        </p>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:184034" data-name="Navigasi admin">
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:184035" data-name="Item navigasi">
            <Categories className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[normal] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:184039">
              Ringkasan
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:184040" data-name="Item navigasi">
            <Profile className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[normal] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:184044">
              Verifikasi UMKM
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:184045" data-name="Item navigasi">
            <Categories className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[normal] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:184049">
              Kategori
            </p>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:184050" data-name="Item navigasi">
            <div className="relative shrink-0 size-[20px]" data-node-id="84:184051" data-name="Ikon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIkon} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[normal] min-w-px relative text-[#006ffd] text-[14px]" data-node-id="84:184053">
              Moderasi
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:184054" data-name="Item navigasi">
            <Store className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[normal] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:184058">
              Kelola Toko
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:184059" data-name="Item navigasi">
            <ShoppingBagOutlined className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[normal] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:184063">
              Kelola Produk
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:184064" data-name="Item navigasi">
            <div className="relative shrink-0 size-[20px]" data-node-id="84:184065" data-name="Ikon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIkon1} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[normal] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:184067">
              Keluar
            </p>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="84:184068" data-name="Ruang navigasi" />
        <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] overflow-clip p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="84:184069" data-name="Panduan admin">
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:184070">
            Jaga kepercayaan.
          </p>
          <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:184071">
            Tinjau dengan adil. Dukung usaha lokal.
          </p>
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#006ffd] text-[12px] w-full" data-node-id="84:184072">
            Panduan verifikasi ↗
          </p>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#758297] text-[10px] w-[min-content]" data-node-id="84:184073">
          © 2026 PASARIN
        </p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-[900px] min-w-px overflow-clip relative" data-node-id="84:184074" data-name="Ruang kerja">
        <div className="bg-white content-stretch flex gap-[16px] h-[88px] items-center overflow-clip px-[32px] relative shrink-0 w-full" data-node-id="84:184075" data-name="Header admin">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:184076">
            Administrasi / Moderasi
          </p>
          <Chat className="relative shrink-0 size-[20px]" />
          <Profile className="relative shrink-0 size-[28px]" />
          <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#192c45] text-[14px] whitespace-nowrap" data-node-id="84:184083">
            Admin platform
          </p>
          <div className="relative shrink-0 size-[14px]" data-node-id="84:184084" data-name="Ikon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIkon2} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[32px] pt-[24px] px-[32px] relative shrink-0 w-full" data-node-id="84:184086" data-name="Konten admin">
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:184087" data-name="Moderasi konten">
            <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:184088" data-name="Pengantar halaman">
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[13px] whitespace-nowrap" data-node-id="84:184089">
                ← Kembali ke daftar laporan
              </p>
              <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:184090" data-name="Judul dan status">
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="84:184091" data-name="Pengantar">
                  <p className="font-['Inter:Bold'] font-bold leading-[1.25] not-italic relative shrink-0 text-[#192c45] text-[28px] tracking-[-0.6px] w-full" data-node-id="84:184092">
                    Detail Laporan
                  </p>
                  <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[14px] w-full" data-node-id="84:184093">
                    LPR-001 · 08 Nov 2026, 09.12 WIB · Data contoh
                  </p>
                </div>
                <div className="bg-[#fff4e4] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:184094" data-name="Badge/Status">
                  <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:184094;101:204" data-name="Text">
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#e86339] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="I84:184094;6:2244">
                      Diperiksa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:184103" data-name="Data dan pratinjau">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-node-id="84:184104" data-name="Konten dan keputusan">
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="84:184105" data-name="Panel informasi">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#192c45] text-[17px] w-full" data-node-id="84:184106">
                    Konten yang dilaporkan
                  </p>
                  <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:184107" data-name="Detail konten">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[230px]" data-node-id="84:184108" data-name="Foto konten">
                      <div className="h-[230px] relative rounded-[12px] shrink-0 w-full" data-node-id="84:184109" data-name="Foto Arabica Gayo">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFotoArabicaGayo} />
                      </div>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:184110" data-name="Informasi konten">
                      <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[20px] w-full" data-node-id="84:184111">
                        Arabica Gayo
                      </p>
                      <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#006ffd] text-[22px] w-full" data-node-id="84:184112">
                        Rp65.000
                      </p>
                      <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:184113">{`Makanan & Minuman · PSR-001`}</p>
                      <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#506078] text-[13px] w-full" data-node-id="84:184114">
                        Lahir dari tanah pegunungan tinggi Aceh Tengah, Arabica Gayo menghadirkan cita rasa klasik yang kaya, seimbang, dan berkarakter kuat. Ditanam secara organik di atas ketinggian 1.200–1.500 mdpl, setiap bijinya memetik nutrisi alami tanah vulkanis untuk menciptakan cangkir kopi yang intens namun tetap lembut di mulut.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#e3e8f0] h-px relative shrink-0 w-full" data-node-id="84:184115" data-name="Pemisah" />
                  <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:184116" data-name="Identitas toko">
                    <div className="bg-[#e5eae0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[44px]" data-node-id="84:184117" data-name="Logo toko">
                      <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[20px] tracking-[-2px] whitespace-nowrap" data-node-id="84:184118">
                        dsc.
                      </p>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:184119" data-name="Nama dan lokasi">
                      <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[18px] w-full" data-node-id="84:184120">
                        Dikala Senja Cafe
                      </p>
                      <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:184121">{`Makanan & Minuman · Jakarta Selatan`}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="84:184122" data-name="Panel informasi">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#192c45] text-[17px] w-full" data-node-id="84:184123">
                    Tentukan keputusan
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#506078] text-[13px] w-full" data-node-id="84:184124">
                    Periksa konten dan alasan laporan sebelum mengambil keputusan. Setiap keputusan memerlukan alasan.
                  </p>
                  <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:184125" data-name="Aksi moderasi">
                    <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[44px] items-center justify-center min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[10px]" data-node-id="84:184126" data-name="Tombol/Sekunder">
                      <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:184126;6:885">
                        Pertahankan
                      </p>
                    </div>
                    <div className="bg-[#006ffd] content-stretch flex flex-[1_0_0] gap-[8px] h-[44px] items-center justify-center min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[10px]" data-node-id="84:184134" data-name="Tombol/Utama">
                      <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="I84:184134;6:788">
                        Sembunyikan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[350px]" data-node-id="84:184142" data-name="Informasi laporan">
                <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[16px] items-start leading-[1.5] overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="84:184143" data-name="Panel informasi">
                  <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[17px] w-full" data-node-id="84:184144">
                    Identitas pelapor
                  </p>
                  <div className="bg-[#f5f7fb] border border-[#e3e8f0] border-dashed content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:184145" data-name="Pelapor tidak tersedia">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:184146">
                      Identitas tidak tersedia
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[13px] w-full" data-node-id="84:184147">
                      Placeholder pelapor — nama, foto, dan kontak tidak tersedia pada data contoh.
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:184148" data-name="Data pengelolaan">
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:184149">
                      Diterima
                    </p>
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:184150">
                      08 Nov 2026, 09.12 WIB
                    </p>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="84:184151" data-name="Panel informasi">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#192c45] text-[17px] w-[min-content]" data-node-id="84:184152">
                    Alasan laporan
                  </p>
                  <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:184153" data-name="Badge/Status">
                    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:184153;101:204" data-name="Text">
                      <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#006ffd] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="I84:184153;6:2244">
                        Data contoh
                      </p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#192c45] text-[14px] w-[min-content]" data-node-id="84:184162">
                    Konten promosi tidak sesuai kategori.
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#758297] text-[13px] w-[min-content]" data-node-id="84:184163">
                    “Mohon ditinjau kesesuaian konten dengan kategori produk.”
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#758297] text-[12px] w-[min-content]" data-node-id="84:184164">
                    Catatan simulasi, bukan pernyataan pelanggaran nyata.
                  </p>
                </div>
                <div className="bg-[#eaf2ff] content-stretch flex gap-[12px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:184165" data-name="Umpan balik status">
                  <div className="relative shrink-0 size-[20px]" data-node-id="84:184166" data-name="Ikon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIkon3} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:184168" data-name="Pesan status">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#006ffd] text-[14px] w-full" data-node-id="84:184169">
                      Dampak keputusan
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#192c45] text-[13px] w-full" data-node-id="84:184170">
                      Pertahankan: tetap tampil. Sembunyikan: tidak tampil di katalog, dapat ditampilkan kembali.
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#006ffd] text-[12px] whitespace-nowrap" data-node-id="84:184171">
                    Tutup ×
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[11px] w-full" data-node-id="84:184172">
            © 2026 PASARIN · Mendukung usaha lokal Indonesia.
          </p>
        </div>
      </div>
      <div className="absolute bg-[#006ffd] h-px left-0 opacity-25 top-[899px] w-[1440px]" data-node-id="84:184173" data-name="Batas viewport awal" />
    </div>
  );
}
