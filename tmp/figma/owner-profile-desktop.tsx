const imgIcon = "https://www.figma.com/api/mcp/asset/3fc2333c-18d1-4c35-81dc-854843e912aa.svg";
const imgChat = "https://www.figma.com/api/mcp/asset/2212a518-7ecf-4c99-baa7-3a9e48a9151d.svg";
const imgStore = "https://www.figma.com/api/mcp/asset/c8a9e214-0003-482f-9c9e-f2c89de5a031.svg";
const imgShoppingBagOutlined = "https://www.figma.com/api/mcp/asset/69054c4c-cd3b-4b86-adb5-850a418d89f4.svg";
const imgCategories = "https://www.figma.com/api/mcp/asset/b9c5249e-4945-453b-945e-15782adf8bd4.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/ca7a62c2-e0c6-4522-a665-96f0d109f975.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/bc9fa769-5a72-41cc-add1-a7348ca6f176.png";
const imgBannerToko = "https://www.figma.com/api/mcp/asset/ba781457-e0ba-4add-9105-d062ac437d71.png";
const imgShieldCheck = "https://www.figma.com/api/mcp/asset/adc2d394-997b-4d35-8c0f-35545555fdeb.svg";
const imgLogOut = "https://www.figma.com/api/mcp/asset/594dd7d1-da09-4af4-9b9d-677dee9659f4.svg";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/4f3a5c85-9f17-4a16-a6d7-5ec80b06f108.svg";
const imgInfo = "https://www.figma.com/api/mcp/asset/1c862284-f0f3-4375-995c-c5a3b9aabe30.svg";
const imgX = "https://www.figma.com/api/mcp/asset/53c6d16f-bac5-4480-b2e5-6b080957c45c.svg";

type TextAreaProps = {
  className?: string;
  content?: string;
  showSupportText?: boolean;
  showTitle?: boolean;
  showUnit?: boolean;
  state?: "Filled";
  supportText?: string;
  title?: string;
  unit?: string;
};

function TextArea({ className, content = "Text", showSupportText = false, showTitle = true, showUnit = false, state = "Filled", supportText = "Support text", title = "Title", unit = "€" }: TextAreaProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[8px] h-[120px] items-start relative w-[295px]"} data-node-id="21:303">
      {showTitle && (
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[12px] w-full" data-node-id="21:304">
          {title}
        </p>
      )}
      <div className="border border-[#c5c6cc] border-solid content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip px-[16px] py-[12px] relative rounded-[12px] w-full" data-node-id="21:305" data-name="Field">
        <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-node-id="21:306" data-name="Content">
          {showUnit && (
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8f9098] text-[14px] whitespace-nowrap" data-node-id="21:307">
              <p className="leading-[18px]">{unit}</p>
            </div>
          )}
          <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-w-px relative" data-node-id="21:308" data-name="Text">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1f2024] text-[14px]" data-node-id="21:309">
              <p className="leading-[20px]">{content}</p>
            </div>
          </div>
        </div>
      </div>
      {showSupportText && (
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f9098] text-[10px] tracking-[0.15px] w-full" data-node-id="21:311">
          {supportText}
        </p>
      )}
    </div>
  );
}

type DropdownProps = {
  className?: string;
  content?: string;
  showSupportText?: boolean;
  showTitle?: boolean;
  showUnit?: boolean;
  state?: "Filled";
  supportText?: string;
  title?: string;
  unit?: string;
};

function Dropdown({ className, content = "Text", showSupportText = false, showTitle = true, showUnit = false, state = "Filled", supportText = "Support text", title = "Title", unit = "€" }: DropdownProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[8px] items-start relative w-[295px]"} data-node-id="21:255">
      {showTitle && (
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[12px] w-full" data-node-id="21:256">
          {title}
        </p>
      )}
      <div className="border border-[#c5c6cc] border-solid content-stretch flex gap-[8px] h-[48px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="21:257" data-name="Field">
        <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-node-id="21:258" data-name="Content">
          {showUnit && (
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8f9098] text-[14px] whitespace-nowrap" data-node-id="21:259">
              <p className="leading-[18px]">{unit}</p>
            </div>
          )}
          <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-w-px relative" data-node-id="21:260" data-name="Text">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1f2024] text-[14px] whitespace-nowrap" data-node-id="21:261">
              <p className="leading-[20px]">{content}</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 size-[12px]" data-node-id="21:263" data-name="Icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
        </div>
      </div>
      {showSupportText && (
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[14px] not-italic relative shrink-0 text-[#8f9098] text-[10px] tracking-[0.15px] w-full" data-node-id="21:264">
          {supportText}
        </p>
      )}
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

function Store({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="2:63" data-name="Store">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStore} />
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

function Categories({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="2:50" data-name="Categories">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCategories} />
    </div>
  );
}

export default function EditProfilTokoDesktop() {
  return (
    <div className="bg-[#f5f7fa] content-stretch flex items-start relative size-full" data-node-id="84:93338" data-name="Edit Profil Toko — Desktop">
      <div className="bg-white content-stretch flex flex-col gap-[26px] items-start min-h-[900px] overflow-clip p-[24px] relative self-stretch shrink-0 w-[232px]" data-node-id="84:93339" data-name="Sidebar UMKM">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:93340" data-name="Logo PASARIN">
          <div className="relative shrink-0 size-[40px]" data-node-id="84:93341" data-name="Simbol PASARIN">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
            </div>
          </div>
          <div className="h-[42px] relative shrink-0 w-[126px]" data-node-id="84:93342" data-name="Nama PASARIN">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#71727a] text-[10px] tracking-[0.5px] whitespace-nowrap" data-node-id="84:93343">
          RUANG KERJA UMKM
        </p>
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:93344" data-name="Identitas toko">
          <div className="bg-[#e5eae0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[36px]" data-node-id="84:93345" data-name="Logo toko">
            <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[14.4px] tracking-[-2px] whitespace-nowrap" data-node-id="84:93346">
              dsc.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:93347" data-name="Nama dan lokasi">
            <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] text-[13px] w-full" data-node-id="84:93348">
              Dikala Senja Cafe
            </p>
            <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:93349">
              Jakarta Selatan
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93350" data-name="Navigasi UMKM">
          <a className="bg-white content-stretch cursor-pointer flex gap-[12px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:93351" data-name="Item navigasi">
            <Categories className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#1f2024] text-[14px] text-left" data-node-id="84:93355">
              Dashboard
            </p>
          </a>
          <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:93356" data-name="Item navigasi">
            <ShoppingBagOutlined className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#1f2024] text-[14px]" data-node-id="84:93360">
              Produk Saya
            </p>
          </div>
          <div className="bg-[#eaf2ff] content-stretch flex gap-[12px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:93361" data-name="Item navigasi">
            <Store className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#006ffd] text-[14px]" data-node-id="84:93365">
              Profil Toko
            </p>
          </div>
          <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:93366" data-name="Item navigasi">
            <div className="relative shrink-0 size-[20px]" data-node-id="84:95966" data-name="shield-check">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldCheck} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#1f2024] text-[14px]" data-node-id="84:93368">
              Status UMKM
            </p>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="84:93369" data-name="Ruang navigasi" />
        <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:93370" data-name="Tombol/Sekunder">
          <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:93370;6:885">
            Lihat Toko ↗
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] h-[44px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:93378" data-name="Logout">
          <div className="relative shrink-0 size-[20px]" data-node-id="84:95969" data-name="log-out">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogOut} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#1f2024] text-[14px]" data-node-id="84:93380">
            Keluar / Logout
          </p>
        </div>
        <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] overflow-clip p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="84:93381" data-name="Bantuan penjual">
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:93382">
            Butuh bantuan?
          </p>
          <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:93383">
            Kami siap membantu usaha Anda berkembang.
          </p>
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#006ffd] text-[12px] w-full" data-node-id="84:93384">
            Pusat Bantuan ↗
          </p>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#71727a] text-[10px] w-[min-content]" data-node-id="84:93385">
          © 2026 PASARIN
        </p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-[900px] min-w-px overflow-clip relative" data-node-id="84:93386" data-name="Ruang kerja">
        <div className="bg-white content-stretch flex gap-[16px] h-[88px] items-center overflow-clip px-[32px] relative shrink-0 w-full" data-node-id="84:93387" data-name="Header UMKM">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#1f2024] text-[14px] whitespace-pre-wrap" data-node-id="84:93388">{`Pusat UMKM  /  Profil Toko`}</p>
          <Chat className="relative shrink-0 size-[20px]" />
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="84:93392" data-name="Akun pemilik">
            <div className="bg-[#eaf2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[99px] shrink-0 size-[36px]" data-node-id="84:93393" data-name="Avatar">
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#006ffd] text-[13px] whitespace-nowrap" data-node-id="84:93394">
                SW
              </p>
            </div>
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1f2024] text-[14px] whitespace-nowrap" data-node-id="84:93395">
              Sari Wulandari
            </p>
            <div className="relative shrink-0 size-[14px]" data-node-id="84:95972" data-name="chevron-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[40px] py-[32px] relative shrink-0 w-full" data-node-id="84:93397" data-name="Konten UMKM">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93398" data-name="Pengantar halaman">
            <p className="font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#006ffd] text-[14px] w-full" data-node-id="84:93399">
              ← Kembali
            </p>
            <p className="font-['Inter:Bold'] font-bold leading-[1.2] not-italic relative shrink-0 text-[#1f2024] text-[28px] w-full" data-node-id="84:93400">
              Profil Toko
            </p>
            <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:93401">
              Ceritakan identitas toko Anda dan bangun kepercayaan pembeli.
            </p>
          </div>
          <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93402" data-name="Formulir dan pratinjau toko">
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip p-[28px] relative rounded-[16px]" data-node-id="84:93403" data-name="Formulir profil toko">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.2] not-italic relative shrink-0 text-[#1f2024] text-[20px] w-full" data-node-id="84:93404">
                Informasi Toko
              </p>
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:93405">
                Bantu pembeli mengenal toko Anda lebih dekat.
              </p>
              <div className="content-stretch flex gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93406" data-name="Identitas toko">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="84:93407" data-name="Input/Normal">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:93408">
                    Nama toko *
                  </p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="84:93409" data-name="Kolom isian">
                    <div className="border border-[#c5c6cc] border-solid content-stretch flex gap-[8px] h-[48px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="I84:93409;143:1431" data-name="Field">
                      <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-node-id="I84:93409;143:1432" data-name="Content">
                        <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-w-px relative" data-node-id="I84:93409;143:1434" data-name="Text">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1f2024] text-[14px] whitespace-nowrap" data-node-id="I84:93409;143:1435">
                            <p className="leading-[20px]">Dikala Senja Cafe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="84:93434" data-name="Input/Normal">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:93435">
                    Kategori toko *
                  </p>
                  <Dropdown className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" content="Makanan & minuman" showTitle={false} title="Kategori toko *" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93459" data-name="Input/Normal">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:93460">
                  Deskripsi toko
                </p>
                <TextArea className="content-stretch flex flex-col gap-[8px] h-[130px] items-start relative shrink-0 w-full" content="Cita rasa pilihan, diracik oleh tangan lokal. Dari pahit manisnya kopi, keharmonisan matcha, hingga kesegaran jus alami, kami menghadirkan karakter bahan alam dalam setiap tegukan harianmu." showTitle={false} title="Deskripsi toko" />
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93478" data-name="Input/Normal">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:93479">
                  Alamat toko *
                </p>
                <TextArea className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" content="Jl. Sudirman No. 28, Jakarta Selatan, DKI Jakarta 55153" showTitle={false} title="Alamat toko *" />
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93497" data-name="Input/Normal">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:93498">
                  Nama pemilik *
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="84:93499" data-name="Kolom isian">
                  <div className="border border-[#c5c6cc] border-solid content-stretch flex gap-[8px] h-[48px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="I84:93499;143:1431" data-name="Field">
                    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-node-id="I84:93499;143:1432" data-name="Content">
                      <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-w-px relative" data-node-id="I84:93499;143:1434" data-name="Text">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1f2024] text-[14px] whitespace-nowrap" data-node-id="I84:93499;143:1435">
                          <p className="leading-[20px]">Sari Wulandari</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93524" data-name="Input/Normal">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:93525">
                  Nomor WhatsApp *
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="84:93526" data-name="Kolom isian">
                  <div className="border border-[#c5c6cc] border-solid content-stretch flex gap-[8px] h-[48px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="I84:93526;143:1431" data-name="Field">
                    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-node-id="I84:93526;143:1432" data-name="Content">
                      <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-w-px relative" data-node-id="I84:93526;143:1434" data-name="Text">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1f2024] text-[14px] whitespace-nowrap" data-node-id="I84:93526;143:1435">
                          <p className="leading-[20px]">+62 812 3456 7890</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:93551">
                Gunakan nomor aktif. Pembeli menghubungi toko melalui nomor ini.
              </p>
              <div className="bg-[#e3e6ed] h-px relative shrink-0 w-full" data-node-id="84:93552" data-name="Pemisah bagian" />
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.2] not-italic relative shrink-0 text-[#1f2024] text-[20px] w-full" data-node-id="84:93553">
                Tampilan Toko
              </p>
              <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93554" data-name="Media toko">
                <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[180px]" data-node-id="84:93555" data-name="Unggah logo">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:93556">
                    Logo toko
                  </p>
                  <div className="bg-[#f8f9fe] content-stretch flex flex-col gap-[12px] items-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="84:93557" data-name="Logo saat ini">
                    <div className="bg-[#e5eae0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[56px]" data-node-id="84:93558" data-name="Logo toko">
                      <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[22.4px] tracking-[-2px] whitespace-nowrap" data-node-id="84:93559">
                        dsc.
                      </p>
                    </div>
                    <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0" data-node-id="84:93560" data-name="Tombol/Sekunder">
                      <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:93560;6:885">
                        Ganti Logo
                      </p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:93568">
                    JPG/PNG · Maks. 2 MB · Rasio 1:1
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-node-id="84:93569" data-name="Unggah banner">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:93570">
                    Banner toko
                  </p>
                  <div className="bg-[#f8f9fe] content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="84:93571" data-name="Banner saat ini">
                    <div className="h-[106px] relative shrink-0 w-full" data-node-id="84:93572" data-name="Banner toko">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBannerToko} />
                    </div>
                    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-full" data-node-id="84:93573" data-name="Ganti banner">
                      <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0" data-node-id="84:93574" data-name="Tombol/Sekunder">
                        <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:93574;6:885">
                          Ganti Banner
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:93582">
                    JPG/PNG · Maks. 5 MB · 1200 × 400 px
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:93583" data-name="Aksi formulir">
                <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:93584">
                  Perubahan tampil setelah disimpan.
                </p>
                <div className="content-stretch flex gap-[12px] items-start justify-end overflow-clip relative shrink-0 w-full" data-node-id="84:93585" data-name="Tombol formulir">
                  <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[100px]" data-node-id="84:93586" data-name="Tombol/Sekunder">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:93586;6:885">
                      Batal
                    </p>
                  </div>
                  <a className="bg-[#006ffd] content-stretch cursor-pointer flex gap-[8px] h-[46px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[200px]" data-node-id="84:93594" data-name="Tombol/Utama">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" data-node-id="I84:93594;6:788">
                      Simpan Perubahan
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[350px]" data-node-id="84:93602" data-name="Pratinjau untuk pembeli">
              <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="84:93603" data-name="Pratinjau Toko">
                <div className="content-stretch flex flex-col items-start overflow-clip p-[22px] relative shrink-0 w-full" data-node-id="84:93604" data-name="Judul pratinjau">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.2] not-italic relative shrink-0 text-[#1f2024] text-[18px] w-full" data-node-id="84:93605">
                    Pratinjau Toko
                  </p>
                </div>
                <div className="h-[142px] relative shrink-0 w-full" data-node-id="84:93606" data-name="Banner toko">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBannerToko} />
                </div>
                <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="84:93607" data-name="Informasi publik toko">
                  <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:93608" data-name="Identitas publik toko">
                    <div className="bg-[#e5eae0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[54px]" data-node-id="84:93609" data-name="Logo toko">
                      <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[21.6px] tracking-[-2px] whitespace-nowrap" data-node-id="84:93610">
                        dsc.
                      </p>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="84:93611" data-name="Nama dan kategori">
                      <p className="font-['Inter:Bold'] font-bold leading-[1.2] not-italic relative shrink-0 text-[#1f2024] text-[20px] w-full" data-node-id="84:93612">
                        Dikala Senja Cafe
                      </p>
                      <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:93613">{`Makanan & minuman`}</p>
                    </div>
                  </div>
                  <div className="bg-[#e7f4e8] content-stretch flex items-start overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="84:93614" data-name="Badge status">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#298267] text-[12px] whitespace-nowrap" data-node-id="84:93615">
                      UMKM terverifikasi
                    </p>
                  </div>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#71727a] text-[13px] w-[min-content]" data-node-id="84:93616">
                    Jakarta Selatan, DKI Jakarta
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1f2024] text-[14px] w-[min-content]" data-node-id="84:93617">
                    Dari pahit manisnya kopi, keharmonisan matcha, hingga kesegaran jus alami, kami menghadirkan karakter bahan alam dalam setiap tegukan harianmu.
                  </p>
                  <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex font-['Arimo:Bold'] font-bold gap-[12px] items-start leading-[0] overflow-clip p-[12px] relative rounded-[10px] shrink-0 text-[#1f2024] text-[13px] w-full" data-node-id="84:93618" data-name="Reputasi toko">
                    <div className="flex-[1_0_0] min-w-px relative" data-node-id="84:93619">
                      <p className="leading-[1.5] mb-0">★ 4,9</p>
                      <p className="leading-[1.5]">48 ulasan</p>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-node-id="84:93620">
                      <p className="leading-[1.5] mb-0">4 produk</p>
                      <p className="leading-[1.5]">Aktif</p>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative" data-node-id="84:93621">
                      <p className="leading-[1.5] mb-0">2024</p>
                      <p className="leading-[1.5]">Bergabung</p>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1f2024] text-[13px] w-[min-content]" data-node-id="84:93622">
                    Jl. Sudirman No. 28, Jakarta Selatan, DKI Jakarta 55153
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1f2024] text-[14px] w-[min-content]" data-node-id="84:93623">
                    +62 812 3456 7890
                  </p>
                  <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[46px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:93624" data-name="Tombol/Utama">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="I84:93624;6:788">
                      Lihat Toko ↗
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#eaf2ff] content-stretch flex gap-[12px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:93632" data-name="Umpan balik">
                <div className="relative shrink-0 size-[20px]" data-node-id="84:95975" data-name="info">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo} />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:93634" data-name="Pesan">
                  <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#006ffd] text-[14px] w-full" data-node-id="84:93635">
                    Toko lengkap, pembeli lebih yakin
                  </p>
                  <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#1f2024] text-[13px] w-full" data-node-id="84:93636">
                    Logo yang jelas dan nomor WhatsApp aktif membantu pembeli mengenali toko Anda.
                  </p>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="84:95978" data-name="x">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgX} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#006ffd] h-px left-0 opacity-25 top-[899px] w-[1440px]" data-node-id="84:93638" data-name="Batas viewport awal" />
    </div>
  );
}
