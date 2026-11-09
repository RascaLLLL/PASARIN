const imgProfile = "https://www.figma.com/api/mcp/asset/19c2e39e-358e-4bce-bc84-89584301f9c3.svg";
const imgChat = "https://www.figma.com/api/mcp/asset/e26610a2-5390-4b2d-b7b6-c48467a36f5b.svg";
const imgShoppingBagOutlined = "https://www.figma.com/api/mcp/asset/a1abbd8d-ca7b-45e1-b8c2-2e5f179276d4.svg";
const imgStore = "https://www.figma.com/api/mcp/asset/5d1e9f4f-a4a4-47d9-a5d1-ed0e4cde40e6.svg";
const imgCategories = "https://www.figma.com/api/mcp/asset/b312459b-6aaa-476e-a2cf-b6714c6d4d38.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/2da56bee-394b-4284-a488-c199233499d4.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/d198a9dc-29b6-438f-ad51-4bbca8142c1c.png";
const imgBannerToko = "https://www.figma.com/api/mcp/asset/6c429b50-6271-4fd9-9803-7171f775648c.png";
const imgShieldCheck = "https://www.figma.com/api/mcp/asset/753bf878-9450-4c66-b6db-4b0588e0d3a8.svg";
const imgLogOut = "https://www.figma.com/api/mcp/asset/b59775de-9904-484f-873e-5aa5c3e8539d.svg";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/1a2c9087-b2f8-4597-b3e7-716a6b1bae05.svg";
const imgFileImage = "https://www.figma.com/api/mcp/asset/3f894ee4-0aef-46e0-8327-a758a639e130.svg";
const imgInfo = "https://www.figma.com/api/mcp/asset/6ccdb11a-10c7-4b2f-ac8c-ae419da50414.svg";

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

export default function DetailVerifikasiUmkmDesktop() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-start relative size-full" data-node-id="84:149364" data-name="Detail Verifikasi UMKM — Desktop">
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start min-h-[900px] overflow-clip p-[24px] relative self-stretch shrink-0 w-[232px]" data-node-id="84:149365" data-name="Sidebar admin">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:149366" data-name="Logo PASARIN">
          <div className="relative shrink-0 size-[40px]" data-node-id="84:149367" data-name="Simbol PASARIN">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
            </div>
          </div>
          <div className="h-[42px] relative shrink-0 w-[126px]" data-node-id="84:149368" data-name="Nama PASARIN">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#758297] text-[10px] tracking-[0.5px] whitespace-nowrap" data-node-id="84:149369">
          RUANG KERJA ADMIN
        </p>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:149370" data-name="Navigasi admin">
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:149371" data-name="Item navigasi">
            <Categories className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:149375">
              Ringkasan
            </p>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:149376" data-name="Item navigasi">
            <Profile className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#006ffd] text-[14px]" data-node-id="84:149380">
              Verifikasi UMKM
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:149381" data-name="Item navigasi">
            <Categories className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:149385">
              Kategori
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:149386" data-name="Item navigasi">
            <div className="relative shrink-0 size-[20px]" data-node-id="84:155309" data-name="shield-check">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldCheck} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:149388">
              Moderasi
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:149389" data-name="Item navigasi">
            <Store className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:149393">
              Kelola Toko
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:149394" data-name="Item navigasi">
            <ShoppingBagOutlined className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:149398">
              Kelola Produk
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:149399" data-name="Item navigasi">
            <div className="relative shrink-0 size-[20px]" data-node-id="84:155312" data-name="log-out">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogOut} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:149401">
              Keluar
            </p>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="84:149402" data-name="Ruang navigasi" />
        <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] overflow-clip p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="84:149403" data-name="Panduan admin">
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:149404">
            Jaga kepercayaan.
          </p>
          <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:149405">
            Tinjau dengan adil. Dukung usaha lokal.
          </p>
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#006ffd] text-[12px] w-full" data-node-id="84:149406">
            Panduan verifikasi ↗
          </p>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#758297] text-[10px] w-[min-content]" data-node-id="84:149407">
          © 2026 PASARIN
        </p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-[900px] min-w-px overflow-clip relative" data-node-id="84:149408" data-name="Ruang kerja">
        <div className="bg-white content-stretch flex gap-[16px] h-[88px] items-center overflow-clip px-[32px] relative shrink-0 w-full" data-node-id="84:149409" data-name="Header admin">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:149410">
            Administrasi / Verifikasi UMKM
          </p>
          <Chat className="relative shrink-0 size-[20px]" />
          <Profile className="relative shrink-0 size-[28px]" />
          <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#192c45] text-[14px] whitespace-nowrap" data-node-id="84:149417">
            Admin platform
          </p>
          <div className="relative shrink-0 size-[14px]" data-node-id="84:155315" data-name="chevron-down">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[32px] py-[24px] relative shrink-0 w-full" data-node-id="84:149419" data-name="Konten admin">
          <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[13px] whitespace-nowrap" data-node-id="84:149420">
            ← Kembali ke daftar verifikasi
          </p>
          <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:149421" data-name="Judul dan status">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="84:149422" data-name="Pengantar halaman">
              <p className="font-['Inter:Bold'] font-bold leading-[1.25] not-italic relative shrink-0 text-[#192c45] text-[28px] tracking-[-0.6px] w-full" data-node-id="84:149423">
                Detail Verifikasi
              </p>
              <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[14px] w-full" data-node-id="84:149424">
                Pengajuan UMKM · 08 Nov 2026, 09.12 WIB
              </p>
            </div>
            <div className="bg-[#fff4e4] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:149425" data-name="Badge/Status">
              <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:149425;101:204" data-name="Text">
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#e86339] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap" data-node-id="I84:149425;6:2244">
                  Menunggu verifikasi
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:149434" data-name="Data dan pratinjau">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-node-id="84:149435" data-name="Data verifikasi">
              <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="84:149436" data-name="Panel informasi">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#192c45] text-[17px] w-full" data-node-id="84:149437">
                  Data pemilik dan toko
                </p>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:149438" data-name="Identitas usaha">
                  <div className="bg-[#e5eae0] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[44px]" data-node-id="84:149439" data-name="Logo toko">
                    <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[20px] tracking-[-2px] whitespace-nowrap" data-node-id="84:149440">
                      dsc.
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:149441" data-name="Nama usaha">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[20px] w-full" data-node-id="84:149442">
                      Dikala Senja Cafe
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:149443">{`Makanan & Minuman · Jakarta Selatan`}</p>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="84:149444" data-name="Informasi pemilik">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="84:149445" data-name="Data pengajuan">
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:149446">
                      Nama pemilik
                    </p>
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:149447">
                      Sari Wulandari
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-node-id="84:149448" data-name="Data pengajuan">
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:149449">
                      Nomor WhatsApp
                    </p>
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:149450">
                      +62 812 3456 7890
                    </p>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="84:149451" data-name="Data pengajuan">
                  <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:149452">
                    Alamat toko
                  </p>
                  <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:149453">
                    Jl. Sudirman No. 28, Jakarta Selatan, DKI Jakarta 55153
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col font-['Arimo:Regular'] font-normal gap-[4px] items-start leading-[1.5] overflow-clip relative shrink-0 w-full" data-node-id="84:149454" data-name="Deskripsi usaha">
                  <p className="relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:149455">
                    Deskripsi toko
                  </p>
                  <p className="relative shrink-0 text-[#506078] text-[13px] w-full" data-node-id="84:149456">
                    Thoughtfully crafted flavors, made by local hands. Dari pahit manisnya kopi, keharmonisan matcha, hingga kesegaran jus alami kami menghadirkan karakter bahan alam dalam setiap tegukan harianmu.
                  </p>
                </div>
                <div className="bg-[#e3e8f0] h-px relative shrink-0 w-full" data-node-id="84:149457" data-name="Pemisah dokumen" />
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:149458">
                  Dokumen identitas
                </p>
                <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:149459" data-name="Placeholder dokumen">
                  <div className="bg-[#f5f7fb] border border-[#e3e8f0] border-dashed content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-[98px] min-w-px overflow-clip p-[12px] relative rounded-[10px]" data-node-id="84:149460" data-name="Dokumen tidak tersedia">
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:149461" data-name="Label dokumen">
                      <div className="relative shrink-0 size-[18px]" data-node-id="84:155318" data-name="file-image">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFileImage} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#192c45] text-[13px]" data-node-id="84:149463">
                        KTP pemilik
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:149464">
                      Placeholder — berkas tidak tersedia
                    </p>
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[11px] w-full" data-node-id="84:149465">
                      Bukan dokumen identitas asli.
                    </p>
                  </div>
                  <div className="bg-[#f5f7fb] border border-[#e3e8f0] border-dashed content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-[98px] min-w-px overflow-clip p-[12px] relative rounded-[10px]" data-node-id="84:149466" data-name="Dokumen tidak tersedia">
                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:149467" data-name="Label dokumen">
                      <div className="relative shrink-0 size-[18px]" data-node-id="84:155321" data-name="file-image">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFileImage} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#192c45] text-[13px]" data-node-id="84:149469">
                        Dokumen usaha / NIB
                      </p>
                    </div>
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:149470">
                      Placeholder — berkas tidak tersedia
                    </p>
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[11px] w-full" data-node-id="84:149471">
                      Bukan dokumen identitas asli.
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[11px] w-full" data-node-id="84:149472">
                  Dokumen bersifat privat dan tidak ditampilkan pada toko publik.
                </p>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="84:149473" data-name="Panel informasi">
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#506078] text-[13px] w-full" data-node-id="84:149474">
                  Pastikan data dan kontak sesuai sebelum menyetujui.
                </p>
                <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:149475" data-name="Aksi verifikasi">
                  <div className="border-[#c73746] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[150px]" data-node-id="84:149476" data-name="Tombol/Sekunder">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#c73746] text-[14px] whitespace-nowrap" data-node-id="I84:149476;6:885">
                      Tolak
                    </p>
                  </div>
                  <div className="bg-[#006ffd] content-stretch flex flex-[1_0_0] gap-[8px] h-[44px] items-center justify-center min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[10px]" data-node-id="84:149484" data-name="Tombol/Utama">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="I84:149484;6:788">
                      Setujui UMKM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[350px]" data-node-id="84:149492" data-name="Pratinjau dan riwayat">
              <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="84:149493" data-name="Pratinjau toko publik">
                <div className="content-stretch flex gap-[8px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-node-id="84:149494" data-name="Judul pratinjau">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:149495">
                    Pratinjau toko publik
                  </p>
                  <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:149496" data-name="Badge/Status">
                    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:149496;101:204" data-name="Text">
                      <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#006ffd] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap" data-node-id="I84:149496;6:2244">
                        Pratinjau
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[112px] relative shrink-0 w-full" data-node-id="84:149505" data-name="Banner toko">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBannerToko} />
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[18px] relative shrink-0 w-full" data-node-id="84:149506" data-name="Informasi publik">
                  <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:149507" data-name="Identitas publik">
                    <div className="bg-[#e5eae0] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[44px]" data-node-id="84:149508" data-name="Logo toko">
                      <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[20px] tracking-[-2px] whitespace-nowrap" data-node-id="84:149509">
                        dsc.
                      </p>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:149510" data-name="Nama dan kategori">
                      <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[18px] w-full" data-node-id="84:149511">
                        Dikala Senja Cafe
                      </p>
                      <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:149512">{`Makanan & Minuman`}</p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#506078] text-[13px] w-full" data-node-id="84:149513">
                    Jakarta Selatan · +62 812 3456 7890
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#506078] text-[12px] w-full" data-node-id="84:149514">
                    Thoughtfully crafted flavors, made by local hands. Dari pahit manisnya kopi, keharmonisan matcha, hingga kesegaran jus alami kami menghadirkan karakter bahan alam dalam setiap tegukan harianmu.
                  </p>
                  <div className="[word-break:break-word] bg-[#f5f7fb] content-stretch flex items-start overflow-clip p-[12px] relative rounded-[8px] shrink-0 text-[12px] w-full" data-node-id="84:149515" data-name="Ringkasan katalog">
                    <p className="flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#192c45]" data-node-id="84:149516">
                      4 produk
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#506078] whitespace-nowrap" data-node-id="84:149517">
                      Mulai Rp13.000
                    </p>
                  </div>
                  <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:149518" data-name="Tombol/Sekunder">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:149518;6:885">
                      Lihat pratinjau toko ↗
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#eaf2ff] content-stretch flex gap-[12px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:149526" data-name="Umpan balik status">
                <div className="relative shrink-0 size-[20px]" data-node-id="84:155324" data-name="info">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo} />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:149528" data-name="Pesan status">
                  <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#006ffd] text-[14px] w-full" data-node-id="84:149529">
                    Tinjau sebelum memutuskan
                  </p>
                  <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#192c45] text-[13px] w-full" data-node-id="84:149530">
                    Cocokkan pemilik, dokumen asli, dan nomor WhatsApp aktif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
