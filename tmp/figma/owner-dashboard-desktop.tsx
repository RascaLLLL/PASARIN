const imgChat = "https://www.figma.com/api/mcp/asset/3923424f-6956-4c2b-b0df-8551064aeb71.svg";
const imgStore = "https://www.figma.com/api/mcp/asset/110b1b9b-67b0-482d-b687-b707fe25be00.svg";
const imgShoppingBagOutlined = "https://www.figma.com/api/mcp/asset/ce61cb5d-bf9a-4b7e-b2c7-de2c0317a4f4.svg";
const imgCategories = "https://www.figma.com/api/mcp/asset/913affa9-1897-40a9-9ace-9b755d7386da.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/8a372a40-c922-4f2c-a754-e302dc56d13d.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/df487779-fb6d-4567-9f8a-3e116ae06200.png";
const imgFotoProduk = "https://www.figma.com/api/mcp/asset/bd70d68c-0035-4259-8ce2-a9e92e40840a.png";
const imgFotoProduk1 = "https://www.figma.com/api/mcp/asset/d545c081-c8b3-4c14-aaba-1469e5645a46.png";
const imgFotoProduk2 = "https://www.figma.com/api/mcp/asset/ae8b3cdc-2633-4295-a226-4044b130e2ad.png";
const imgFotoProduk3 = "https://www.figma.com/api/mcp/asset/6c01780f-3041-4c01-92e3-65fa45b4a0d1.png";
const imgShieldCheck = "https://www.figma.com/api/mcp/asset/19ef8104-8439-417d-8877-7265bd5a3da2.svg";
const imgLogOut = "https://www.figma.com/api/mcp/asset/53a8ea49-d057-4c17-8013-42cbc66decea.svg";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/68a6bec3-a17a-48bc-a7c8-38ae35a2d50c.svg";
const imgCircleCheck = "https://www.figma.com/api/mcp/asset/f81f94d8-1b7d-46fa-9c15-ddca003aad79.svg";
const imgX = "https://www.figma.com/api/mcp/asset/029451d3-61c0-44cf-b9cb-29873cb1f217.svg";
const imgShoppingBag = "https://www.figma.com/api/mcp/asset/23136ebe-4da7-4f91-9cf7-ed054faf9b42.svg";
const imgStore1 = "https://www.figma.com/api/mcp/asset/2d042050-6622-476b-94c2-40f5026e7ceb.svg";
const imgMessageCircle = "https://www.figma.com/api/mcp/asset/c6085f1c-76f5-4ef2-9878-032436cc6b91.svg";

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

export default function DashboardUmkmDisetujuiDesktop() {
  return (
    <div className="bg-[#f5f7fa] content-stretch flex items-start relative size-full" data-node-id="84:89846" data-name="Dashboard UMKM disetujui — Desktop">
      <div className="bg-white content-stretch flex flex-col gap-[26px] items-start min-h-[900px] overflow-clip p-[24px] relative self-stretch shrink-0 w-[232px]" data-node-id="84:89847" data-name="Sidebar UMKM">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:89848" data-name="Logo PASARIN">
          <div className="relative shrink-0 size-[40px]" data-node-id="84:89849" data-name="Simbol PASARIN">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
            </div>
          </div>
          <div className="h-[42px] relative shrink-0 w-[126px]" data-node-id="84:89850" data-name="Nama PASARIN">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#71727a] text-[10px] tracking-[0.5px] whitespace-nowrap" data-node-id="84:89851">
          RUANG KERJA UMKM
        </p>
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:89852" data-name="Identitas toko">
          <div className="bg-[#e5eae0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[36px]" data-node-id="84:89853" data-name="Logo toko">
            <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[14.4px] tracking-[-2px] whitespace-nowrap" data-node-id="84:89854">
              dsc.
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:89855" data-name="Nama dan lokasi">
            <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] text-[13px] w-full" data-node-id="84:89856">
              Dikala Senja Cafe
            </p>
            <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:89857">
              Jakarta Selatan
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:89858" data-name="Navigasi UMKM">
          <div className="bg-[#eaf2ff] content-stretch flex gap-[12px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:89859" data-name="Item navigasi">
            <Categories className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#006ffd] text-[14px]" data-node-id="84:89863">
              Dashboard
            </p>
          </div>
          <a className="bg-white content-stretch cursor-pointer flex gap-[12px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:89864" data-name="Item navigasi">
            <ShoppingBagOutlined className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#1f2024] text-[14px] text-left" data-node-id="84:89868">
              Produk Saya
            </p>
          </a>
          <a className="bg-white content-stretch cursor-pointer flex gap-[12px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:89869" data-name="Item navigasi">
            <Store className="relative shrink-0 size-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#1f2024] text-[14px] text-left" data-node-id="84:89873">
              Profil Toko
            </p>
          </a>
          <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:89874" data-name="Item navigasi">
            <div className="relative shrink-0 size-[20px]" data-node-id="84:95714" data-name="shield-check">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldCheck} />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#1f2024] text-[14px]" data-node-id="84:89876">
              Status UMKM
            </p>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="84:89877" data-name="Ruang navigasi" />
        <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:89878" data-name="Tombol/Sekunder">
          <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:89878;6:885">
            Lihat Toko ↗
          </p>
        </div>
        <div className="content-stretch flex gap-[10px] h-[44px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:89886" data-name="Logout">
          <div className="relative shrink-0 size-[20px]" data-node-id="84:95717" data-name="log-out">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogOut} />
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#1f2024] text-[14px]" data-node-id="84:89888">
            Keluar / Logout
          </p>
        </div>
        <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] overflow-clip p-[16px] relative rounded-[14px] shrink-0 w-full" data-node-id="84:89889" data-name="Bantuan penjual">
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:89890">
            Butuh bantuan?
          </p>
          <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:89891">
            Kami siap membantu usaha Anda berkembang.
          </p>
          <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#006ffd] text-[12px] w-full" data-node-id="84:89892">
            Pusat Bantuan ↗
          </p>
        </div>
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#71727a] text-[10px] w-[min-content]" data-node-id="84:89893">
          © 2026 PASARIN
        </p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-[900px] min-w-px overflow-clip relative" data-node-id="84:89894" data-name="Ruang kerja">
        <div className="bg-white content-stretch flex gap-[16px] h-[88px] items-center overflow-clip px-[32px] relative shrink-0 w-full" data-node-id="84:89895" data-name="Header UMKM">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#1f2024] text-[14px] whitespace-pre-wrap" data-node-id="84:89896">{`Pusat UMKM  /  Dashboard`}</p>
          <Chat className="relative shrink-0 size-[20px]" />
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="84:89900" data-name="Akun pemilik">
            <div className="bg-[#eaf2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[99px] shrink-0 size-[36px]" data-node-id="84:89901" data-name="Avatar">
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#006ffd] text-[13px] whitespace-nowrap" data-node-id="84:89902">
                SW
              </p>
            </div>
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#1f2024] text-[14px] whitespace-nowrap" data-node-id="84:89903">
              Sari Wulandari
            </p>
            <div className="relative shrink-0 size-[14px]" data-node-id="84:95720" data-name="chevron-down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[40px] py-[24px] relative shrink-0 w-full" data-node-id="84:89905" data-name="Konten UMKM">
          <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:89906" data-name="Sambutan pemilik">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-node-id="84:89907" data-name="Pengantar halaman">
              <p className="font-['Inter:Bold'] font-bold leading-[1.2] not-italic relative shrink-0 text-[#1f2024] text-[28px] w-full" data-node-id="84:89908">
                Selamat berjualan, Sari.
              </p>
              <p className="font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:89909">
                Ini kabar terbaru Dikala Senja Cafe hari ini.
              </p>
            </div>
            <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[168px]" data-node-id="84:89910" data-name="Tombol/Sekunder">
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:89910;6:885">
                Lihat Toko ↗
              </p>
            </div>
          </div>
          <div className="bg-[#e7f4e8] content-stretch flex gap-[12px] items-start overflow-clip p-[16px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:89918" data-name="Umpan balik">
            <div className="relative shrink-0 size-[20px]" data-node-id="84:95723" data-name="circle-check">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCircleCheck} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="84:89920" data-name="Pesan">
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#298267] text-[14px] w-full" data-node-id="84:89921">
                UMKM disetujui · Dikala Senja Cafe aktif
              </p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-node-id="84:95726" data-name="x">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgX} />
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:89923" data-name="Ringkasan performa toko">
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="84:89924" data-name="Metrik toko">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:89925" data-name="Label metrik">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#71727a] text-[14px]" data-node-id="84:89926">
                  Total produk
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="84:95729" data-name="shopping-bag">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShoppingBag} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.2] not-italic relative shrink-0 text-[#1f2024] text-[28px] w-full" data-node-id="84:89928">
                4
              </p>
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:89929">
                4 aktif · 0 draf
              </p>
            </div>
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="84:89930" data-name="Metrik toko">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:89931" data-name="Label metrik">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#71727a] text-[14px]" data-node-id="84:89932">
                  Kunjungan toko
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="84:95732" data-name="store">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStore1} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.2] not-italic relative shrink-0 text-[#1f2024] text-[28px] w-full" data-node-id="84:89934">
                1.284
              </p>
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#298267] text-[13px] w-full" data-node-id="84:89935">
                ↑ 18,6% dari bulan lalu
              </p>
            </div>
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip p-[12px] relative rounded-[16px]" data-node-id="84:89936" data-name="Metrik toko">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:89937" data-name="Label metrik">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-px relative text-[#71727a] text-[14px]" data-node-id="84:89938">
                  Pertanyaan produk
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="84:95735" data-name="message-circle">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageCircle} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.2] not-italic relative shrink-0 text-[#1f2024] text-[28px] w-full" data-node-id="84:89940">
                86
              </p>
              <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#298267] text-[13px] w-full" data-node-id="84:89941">
                ↑ 12,0% dari bulan lalu
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="84:89942" data-name="Katalog produk">
            <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:89943" data-name="Kelola produk">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold'] font-bold leading-[1.2] min-w-px not-italic relative text-[#1f2024] text-[20px]" data-node-id="84:89944">
                Produk Saya
              </p>
              <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[46px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[180px]" data-node-id="84:89945" data-name="Tombol/Utama">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="I84:89945;6:788">
                  + Tambah Produk
                </p>
              </div>
            </div>
            <div className="bg-[#f8f9fe] content-stretch flex gap-[20px] h-[36px] items-start overflow-clip px-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="84:89953" data-name="Kolom tabel">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Arimo:Bold'] font-bold leading-[1.5] min-w-px relative text-[#1f2024] text-[12px]" data-node-id="84:89954">
                Produk
              </p>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[130px]" data-node-id="84:89955" data-name="Harga">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[12px] w-full" data-node-id="84:89956">
                  Harga
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[160px]" data-node-id="84:89957" data-name="Kategori">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[12px] w-full" data-node-id="84:89958">
                  Kategori
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="84:89959" data-name="Status">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[12px] w-full" data-node-id="84:89960">
                  Status
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[150px]" data-node-id="84:89961" data-name="Aksi">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[12px] w-full" data-node-id="84:89962">
                  Aksi
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="84:89963" data-name="Produk aktif">
              <div className="border-[#e3e6ed] border-b border-solid content-stretch flex gap-[20px] h-[60px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="84:89964" data-name="Baris produk">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="84:89965" data-name="Identitas produk">
                  <div className="relative rounded-[10px] shrink-0 size-[44px]" data-node-id="84:89966" data-name="Foto produk">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgFotoProduk} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:89967" data-name="Nama dan kode">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:89968">
                      Arabica Gayo
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:89969">
                      PSR-001
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[130px]" data-node-id="84:89970" data-name="Harga">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:89971">
                    Rp65.000
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[160px]" data-node-id="84:89972" data-name="Kategori">
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:89973">{`Makanan & minuman`}</p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="84:89974" data-name="Status">
                  <div className="bg-[#e7f4e8] content-stretch flex items-start overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="84:89975" data-name="Badge status">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#298267] text-[12px] whitespace-nowrap" data-node-id="84:89976">
                      Aktif
                    </p>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex font-['Arimo:Regular'] font-normal gap-[12px] items-start overflow-clip relative shrink-0 text-[13px] w-[150px] whitespace-nowrap" data-node-id="84:89977" data-name="Aksi">
                  <a className="block cursor-pointer leading-[0] relative shrink-0 text-[#006ffd]" data-node-id="84:89978">
                    <p className="leading-[normal]">Edit</p>
                  </a>
                  <p className="leading-[normal] relative shrink-0 text-[#ed3241]" data-node-id="84:89979">
                    Hapus
                  </p>
                </div>
              </div>
              <div className="border-[#e3e6ed] border-b border-solid content-stretch flex gap-[20px] h-[60px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="84:89980" data-name="Baris produk">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="84:89981" data-name="Identitas produk">
                  <div className="relative rounded-[10px] shrink-0 size-[44px]" data-node-id="84:89982" data-name="Foto produk">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                      <img alt="" className="absolute h-[132.29%] left-0 max-w-none top-[-32.39%] w-full" src={imgFotoProduk1} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:89983" data-name="Nama dan kode">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:89984">
                      Pure Matcha
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:89985">
                      PSR-002
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[130px]" data-node-id="84:89986" data-name="Harga">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:89987">
                    Rp13.000
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[160px]" data-node-id="84:89988" data-name="Kategori">
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:89989">{`Makanan & minuman`}</p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="84:89990" data-name="Status">
                  <div className="bg-[#e7f4e8] content-stretch flex items-start overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="84:89991" data-name="Badge status">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#298267] text-[12px] whitespace-nowrap" data-node-id="84:89992">
                      Aktif
                    </p>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex font-['Arimo:Regular'] font-normal gap-[12px] items-start leading-[normal] overflow-clip relative shrink-0 text-[13px] w-[150px] whitespace-nowrap" data-node-id="84:89993" data-name="Aksi">
                  <p className="relative shrink-0 text-[#006ffd]" data-node-id="84:89994">
                    Edit
                  </p>
                  <p className="relative shrink-0 text-[#ed3241]" data-node-id="84:89995">
                    Hapus
                  </p>
                </div>
              </div>
              <div className="border-[#e3e6ed] border-b border-solid content-stretch flex gap-[20px] h-[60px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="84:89996" data-name="Baris produk">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="84:89997" data-name="Identitas produk">
                  <div className="relative rounded-[10px] shrink-0 size-[44px]" data-node-id="84:89998" data-name="Foto produk">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgFotoProduk2} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:89999" data-name="Nama dan kode">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:90000">
                      Kopi Susu Sahabat
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:90001">
                      PSR-003
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[130px]" data-node-id="84:90002" data-name="Harga">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:90003">
                    Rp15.000
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[160px]" data-node-id="84:90004" data-name="Kategori">
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:90005">{`Makanan & minuman`}</p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="84:90006" data-name="Status">
                  <div className="bg-[#e7f4e8] content-stretch flex items-start overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="84:90007" data-name="Badge status">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#298267] text-[12px] whitespace-nowrap" data-node-id="84:90008">
                      Aktif
                    </p>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex font-['Arimo:Regular'] font-normal gap-[12px] items-start leading-[normal] overflow-clip relative shrink-0 text-[13px] w-[150px] whitespace-nowrap" data-node-id="84:90009" data-name="Aksi">
                  <p className="relative shrink-0 text-[#006ffd]" data-node-id="84:90010">
                    Edit
                  </p>
                  <p className="relative shrink-0 text-[#ed3241]" data-node-id="84:90011">
                    Hapus
                  </p>
                </div>
              </div>
              <div className="border-[#e3e6ed] border-b border-solid content-stretch flex gap-[20px] h-[60px] items-center overflow-clip px-[8px] relative shrink-0 w-full" data-node-id="84:90012" data-name="Baris produk">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative" data-node-id="84:90013" data-name="Identitas produk">
                  <div className="relative rounded-[10px] shrink-0 size-[44px]" data-node-id="84:90014" data-name="Foto produk">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgFotoProduk3} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.5] min-w-px overflow-clip relative" data-node-id="84:90015" data-name="Nama dan kode">
                    <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:90016">
                      Orange Juice
                    </p>
                    <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:90017">
                      PSR-004
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[130px]" data-node-id="84:90018" data-name="Harga">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.5] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:90019">
                    Rp15.000
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[160px]" data-node-id="84:90020" data-name="Kategori">
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[13px] w-full" data-node-id="84:90021">{`Makanan & minuman`}</p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[90px]" data-node-id="84:90022" data-name="Status">
                  <div className="bg-[#e7f4e8] content-stretch flex items-start overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="84:90023" data-name="Badge status">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#298267] text-[12px] whitespace-nowrap" data-node-id="84:90024">
                      Aktif
                    </p>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex font-['Arimo:Regular'] font-normal gap-[12px] items-start leading-[normal] overflow-clip relative shrink-0 text-[13px] w-[150px] whitespace-nowrap" data-node-id="84:90025" data-name="Aksi">
                  <p className="relative shrink-0 text-[#006ffd]" data-node-id="84:90026">
                    Edit
                  </p>
                  <p className="relative shrink-0 text-[#ed3241]" data-node-id="84:90027">
                    Hapus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#006ffd] h-px left-0 opacity-25 top-[899px] w-[1440px]" data-node-id="84:90028" data-name="Batas viewport awal" />
    </div>
  );
}
