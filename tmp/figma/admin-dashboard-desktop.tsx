const imgProfile = "https://www.figma.com/api/mcp/asset/4037d5e8-1d7a-4328-bd3e-10d176908e9f.svg";
const imgChat = "https://www.figma.com/api/mcp/asset/e98ed96d-6633-45c7-bc06-935d7d0db14b.svg";
const imgShoppingBagOutlined = "https://www.figma.com/api/mcp/asset/34fdb234-b563-42e3-9a28-a70e824dde4a.svg";
const imgStore = "https://www.figma.com/api/mcp/asset/761ce5c3-1670-4bc5-ab2a-4295910400d2.svg";
const imgCategories = "https://www.figma.com/api/mcp/asset/a9a61923-9118-4c87-be38-23ce33999125.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/d2da9f6d-ee8d-4fbd-91ba-0495d0457ff9.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/411a5b21-bf12-403e-99c6-a19dad0679ec.png";
const imgShieldCheck = "https://www.figma.com/api/mcp/asset/26aef6e1-c04f-485e-9155-5f6dea0cd881.svg";
const imgLogOut = "https://www.figma.com/api/mcp/asset/9020db05-dcb6-433b-9ba6-4f2a1d88691f.svg";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/6547d1df-0b7f-498e-a6db-47f53b258ad8.svg";
const imgCalendarDays = "https://www.figma.com/api/mcp/asset/155c1f49-5676-434b-85de-75ce19d81011.svg";
const imgStore1 = "https://www.figma.com/api/mcp/asset/f9e74550-70dc-4e7f-84ba-5f60901e170f.svg";
const imgPackage = "https://www.figma.com/api/mcp/asset/ed91ce87-c97b-46ba-9ddd-e6545ba47ae2.svg";
const imgBadgeCheck = "https://www.figma.com/api/mcp/asset/79437880-59e0-4b2a-bf69-90f4aaabc186.svg";
const imgShapes = "https://www.figma.com/api/mcp/asset/a32398ba-3945-48e3-9226-b2804e0f28d5.svg";
const imgBadgeCheck1 = "https://www.figma.com/api/mcp/asset/103e03c6-2ca8-4c0a-92c8-4c0b26a4711f.svg";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/f68b94aa-81d8-4268-b6f0-7836547aef0d.svg";
const imgShapes1 = "https://www.figma.com/api/mcp/asset/4b86b09c-5c88-4822-8934-4695ce6bb152.svg";
const imgCircleCheck = "https://www.figma.com/api/mcp/asset/7542f1b0-104e-4777-ae07-ca95d34a219d.svg";

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

export default function DashboardAdminDesktop() {
  return (
    <div className="bg-[#f5f7fb] content-stretch flex items-start relative size-full" data-node-id="84:148628" data-name="Dashboard Admin — Desktop">
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start min-h-[900px] overflow-clip p-[24px] relative self-stretch shrink-0 w-[232px]" data-node-id="84:148629" data-name="Sidebar admin">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:148630" data-name="Logo PASARIN">
          <div className="relative shrink-0 size-[40px]" data-node-id="84:148631" data-name="Simbol PASARIN">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
            </div>
          </div>
          <div className="h-[42px] relative shrink-0 w-[126px]" data-node-id="84:148632" data-name="Nama PASARIN">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#758297] text-[10px] tracking-[0.5px] whitespace-nowrap" data-node-id="84:148633">
          RUANG KERJA ADMIN
        </p>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:148634" data-name="Navigasi admin">
          <div className="bg-[#eaf2ff] content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:148635" data-name="Item navigasi">
            <Categories className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#006ffd] text-[14px]" data-node-id="84:148639">
              Ringkasan
            </p>
          </div>
          <a className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:148640" data-name="Item navigasi">
            <Profile className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px] text-left" data-node-id="84:148644">
              Verifikasi UMKM
            </p>
          </a>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:148645" data-name="Item navigasi">
            <Categories className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:148649">
              Kategori
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:148650" data-name="Item navigasi">
            <div className="relative shrink-0 size-[20px]" data-node-id="84:155219" data-name="shield-check">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldCheck} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:148652">
              Moderasi
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:148653" data-name="Item navigasi">
            <Store className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:148657">
              Kelola Toko
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:148658" data-name="Item navigasi">
            <ShoppingBagOutlined className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:148662">
              Kelola Produk
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:148663" data-name="Item navigasi">
            <div className="relative shrink-0 size-[20px]" data-node-id="84:155222" data-name="log-out">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogOut} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:148665">
              Keluar
            </p>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="84:148666" data-name="Ruang navigasi" />
        <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] overflow-clip p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="84:148667" data-name="Panduan admin">
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:148668">
            Jaga kepercayaan.
          </p>
          <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:148669">
            Tinjau dengan adil. Dukung usaha lokal.
          </p>
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#006ffd] text-[12px] w-full" data-node-id="84:148670">
            Panduan verifikasi ↗
          </p>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#758297] text-[10px] w-[min-content]" data-node-id="84:148671">
          © 2026 PASARIN
        </p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-[900px] min-w-px overflow-clip relative" data-node-id="84:148672" data-name="Ruang kerja">
        <div className="bg-white content-stretch flex gap-[16px] h-[88px] items-center overflow-clip px-[32px] relative shrink-0 w-full" data-node-id="84:148673" data-name="Header admin">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#192c45] text-[14px]" data-node-id="84:148674">
            Administrasi / Ringkasan
          </p>
          <Chat className="relative shrink-0 size-[20px]" />
          <Profile className="relative shrink-0 size-[28px]" />
          <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#192c45] text-[14px] whitespace-nowrap" data-node-id="84:148681">
            Admin platform
          </p>
          <div className="relative shrink-0 size-[14px]" data-node-id="84:155225" data-name="chevron-down">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[32px] py-[24px] relative shrink-0 w-full" data-node-id="84:148683" data-name="Konten admin">
          <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:148684" data-name="Sambutan admin">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="84:148685" data-name="Pengantar halaman">
              <p className="font-['Inter:Bold'] font-bold leading-[1.25] not-italic relative shrink-0 text-[#192c45] text-[28px] tracking-[-0.6px] w-full" data-node-id="84:148686">
                Ringkasan Admin
              </p>
              <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[14px] w-full" data-node-id="84:148687">
                Selamat datang, Aditya. Ini kabar PASARIN hari ini.
              </p>
            </div>
            <div className="bg-white content-stretch flex gap-[8px] items-start overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-[170px]" data-node-id="84:148688" data-name="Tanggal laporan">
              <div className="relative shrink-0 size-[18px]" data-node-id="84:155228" data-name="calendar-days">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendarDays} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#192c45] text-[13px]" data-node-id="84:148690">
                08 Nov 2026
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:148691" data-name="Ringkasan marketplace">
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip p-[20px] relative rounded-[16px]" data-node-id="84:148692" data-name="Metrik marketplace">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:148693" data-name="Label metrik">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#506078] text-[13px]" data-node-id="84:148694">
                  Total UMKM
                </p>
                <div className="relative shrink-0 size-[18px]" data-node-id="84:155231" data-name="store">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStore1} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#192c45] text-[32px] w-full" data-node-id="84:148696">
                1.248
              </p>
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#298267] text-[12px] w-full" data-node-id="84:148697">
                +48 bulan ini
              </p>
            </div>
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip p-[20px] relative rounded-[16px]" data-node-id="84:148698" data-name="Metrik marketplace">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:148699" data-name="Label metrik">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#506078] text-[13px]" data-node-id="84:148700">
                  Produk aktif
                </p>
                <div className="relative shrink-0 size-[18px]" data-node-id="84:155234" data-name="package">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPackage} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#192c45] text-[32px] w-full" data-node-id="84:148702">
                4.286
              </p>
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#298267] text-[12px] w-full" data-node-id="84:148703">
                +186 bulan ini
              </p>
            </div>
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip p-[20px] relative rounded-[16px]" data-node-id="84:148704" data-name="Metrik marketplace">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:148705" data-name="Label metrik">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#506078] text-[13px]" data-node-id="84:148706">
                  Perlu verifikasi
                </p>
                <div className="relative shrink-0 size-[18px]" data-node-id="84:155237" data-name="badge-check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBadgeCheck} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#192c45] text-[32px] w-full" data-node-id="84:148708">
                24
              </p>
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#a66c16] text-[12px] w-full" data-node-id="84:148709">
                8 pengajuan hari ini
              </p>
            </div>
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip p-[20px] relative rounded-[16px]" data-node-id="84:148710" data-name="Metrik marketplace">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:148711" data-name="Label metrik">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#506078] text-[13px]" data-node-id="84:148712">
                  Kategori
                </p>
                <div className="relative shrink-0 size-[18px]" data-node-id="84:155240" data-name="shapes">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#192c45] text-[32px] w-full" data-node-id="84:148714">
                4
              </p>
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#298267] text-[12px] w-full" data-node-id="84:148715">
                Semua kategori aktif
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:148716" data-name="Aktivitas dan akses cepat">
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip py-[20px] relative rounded-[16px]" data-node-id="84:148717" data-name="Pengajuan terbaru">
              <div className="content-stretch flex gap-[16px] items-center overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="84:148718" data-name="Judul daftar">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#192c45] text-[18px]" data-node-id="84:148719">
                  UMKM baru untuk ditinjau
                </p>
                <div className="bg-[#fff4e4] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:148720" data-name="Badge/Status">
                  <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:148720;101:204" data-name="Text">
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#e86339] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap" data-node-id="I84:148720;6:2244">
                      24 menunggu
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="84:148729" data-name="Daftar pengajuan">
                <div className="bg-[#f5f7fb] content-stretch flex gap-[16px] h-[40px] items-center overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="84:148730" data-name="Kolom tabel">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="84:148731" data-name="Kolom toko">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#758297] text-[11px] w-full" data-node-id="84:148732">
                      TOKO / PEMILIK
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="84:148733" data-name="Kolom lokasi">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#758297] text-[11px] w-full" data-node-id="84:148734">
                      LOKASI
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="84:148735" data-name="Kolom aksi">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#758297] text-[11px] w-full" data-node-id="84:148736">
                      AKSI
                    </p>
                  </div>
                </div>
                <div className="border-[#e3e8f0] border-b border-solid content-stretch flex gap-[16px] h-[76px] items-center overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="84:148737" data-name="Baris pengajuan">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="84:148738" data-name="Toko dan pemilik">
                    <div className="bg-[#e5eae0] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="84:148739" data-name="Avatar toko">
                      <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[15px] whitespace-nowrap" data-node-id="84:148740">
                        dsc.
                      </p>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:148741" data-name="Identitas pengaju">
                      <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:148742">
                        Dikala Senja Cafe
                      </p>
                      <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:148743">
                        Sari Wulandari
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="84:148744" data-name="Lokasi toko">
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#506078] text-[13px] w-full" data-node-id="84:148745">
                      Jakarta Selatan
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="84:148746" data-name="Aksi pengajuan">
                    <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[100px]" data-node-id="84:148747" data-name="Tombol/Sekunder">
                      <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:148747;6:885">
                        Tinjau
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-[#e3e8f0] border-b border-solid content-stretch flex gap-[16px] h-[76px] items-center overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="84:148755" data-name="Baris pengajuan">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="84:148756" data-name="Toko dan pemilik">
                    <div className="bg-[#eaf2ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="84:148757" data-name="Avatar toko">
                      <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#006ffd] text-[15px] whitespace-nowrap" data-node-id="84:148758">
                        LB
                      </p>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:148759" data-name="Identitas pengaju">
                      <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:148760">
                        Laras Batik Studio
                      </p>
                      <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:148761">
                        Laras Puspita
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="84:148762" data-name="Lokasi toko">
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#506078] text-[13px] w-full" data-node-id="84:148763">
                      Yogyakarta
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="84:148764" data-name="Aksi pengajuan">
                    <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[100px]" data-node-id="84:148765" data-name="Tombol/Sekunder">
                      <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:148765;6:885">
                        Tinjau
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-[#e3e8f0] border-b border-solid content-stretch flex gap-[16px] h-[76px] items-center overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="84:148773" data-name="Baris pengajuan">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="84:148774" data-name="Toko dan pemilik">
                    <div className="bg-[#eaf2ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="84:148775" data-name="Avatar toko">
                      <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#006ffd] text-[15px] whitespace-nowrap" data-node-id="84:148776">
                        AN
                      </p>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:148777" data-name="Identitas pengaju">
                      <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:148778">
                        Anyam Nusantara
                      </p>
                      <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:148779">
                        Rizky Hidayat
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="84:148780" data-name="Lokasi toko">
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#506078] text-[13px] w-full" data-node-id="84:148781">
                      Solo
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="84:148782" data-name="Aksi pengajuan">
                    <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[100px]" data-node-id="84:148783" data-name="Tombol/Sekunder">
                      <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:148783;6:885">
                        Tinjau
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-[#e3e8f0] border-b border-solid content-stretch flex gap-[16px] h-[76px] items-center overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="84:148791" data-name="Baris pengajuan">
                  <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="84:148792" data-name="Toko dan pemilik">
                    <div className="bg-[#eaf2ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[40px]" data-node-id="84:148793" data-name="Avatar toko">
                      <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#006ffd] text-[15px] whitespace-nowrap" data-node-id="84:148794">
                        RR
                      </p>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:148795" data-name="Identitas pengaju">
                      <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:148796">
                        Ruang Rona
                      </p>
                      <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:148797">
                        Dewi Anggraini
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[120px]" data-node-id="84:148798" data-name="Lokasi toko">
                    <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#506078] text-[13px] w-full" data-node-id="84:148799">
                      Bandung
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[100px]" data-node-id="84:148800" data-name="Aksi pengajuan">
                    <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[100px]" data-node-id="84:148801" data-name="Tombol/Sekunder">
                      <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:148801;6:885">
                        Tinjau
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full" data-node-id="84:148809" data-name="Footer daftar">
                <p className="flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#758297] text-[12px]" data-node-id="84:148810">
                  4 dari 24 pengajuan menunggu
                </p>
                <p className="font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[13px] whitespace-nowrap" data-node-id="84:148811">
                  Lihat semua →
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[330px]" data-node-id="84:148812" data-name="Pusat pengelolaan">
              <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="84:148813" data-name="Panel informasi">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#192c45] text-[17px] w-full" data-node-id="84:148814">
                  Akses cepat
                </p>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="84:148815" data-name="Pintasan admin">
                  <div className="bg-[#eaf2ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="84:148816" data-name="Ikon pintasan">
                    <div className="relative shrink-0 size-[20px]" data-node-id="84:155243" data-name="badge-check">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBadgeCheck1} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:148818" data-name="Informasi pintasan">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:148819">
                      Verifikasi UMKM
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:148820">
                      24 usaha menunggu ditinjau
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="84:155246" data-name="chevron-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="84:148822" data-name="Pintasan admin">
                  <div className="bg-[#eaf2ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="84:148823" data-name="Ikon pintasan">
                    <div className="relative shrink-0 size-[20px]" data-node-id="84:155249" data-name="shield-check">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldCheck} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:148825" data-name="Informasi pintasan">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:148826">
                      Moderasi
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:148827">
                      3 laporan perlu perhatian
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="84:155252" data-name="chevron-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="84:148829" data-name="Pintasan admin">
                  <div className="bg-[#eaf2ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[38px]" data-node-id="84:148830" data-name="Ikon pintasan">
                    <div className="relative shrink-0 size-[20px]" data-node-id="84:155255" data-name="shapes">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes1} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:148832" data-name="Informasi pintasan">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#192c45] text-[14px] w-full" data-node-id="84:148833">
                      Kelola kategori
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#758297] text-[12px] w-full" data-node-id="84:148834">
                      4 kategori · 4.286 produk
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-node-id="84:155258" data-name="chevron-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
                  </div>
                </div>
              </div>
              <div className="bg-[#e7f4e8] content-stretch flex gap-[12px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:148836" data-name="Umpan balik status">
                <div className="relative shrink-0 size-[20px]" data-node-id="84:155261" data-name="circle-check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCircleCheck} />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:148838" data-name="Pesan status">
                  <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#298267] text-[14px] w-full" data-node-id="84:148839">
                    Dukung usaha lokal
                  </p>
                  <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#192c45] text-[13px] w-full" data-node-id="84:148840">
                    1.224 dari 1.248 UMKM sudah terverifikasi. Bantu 24 usaha berikutnya memulai.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#758297] text-[11px] w-full whitespace-pre-wrap" data-node-id="84:148841">{`© 2026 PASARIN · Mendukung usaha lokal Indonesia.  •  Diperbarui baru saja`}</p>
        </div>
      </div>
    </div>
  );
}
