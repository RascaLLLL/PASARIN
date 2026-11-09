const imgSearch = "https://www.figma.com/api/mcp/asset/78818d71-c111-49cf-aca5-6ac176c0af57.svg";
const imgSimbolPasarin = "https://www.figma.com/api/mcp/asset/8b8f1b38-1855-4bd6-ba8c-b63449c15fb3.png";
const imgNamaPasarin = "https://www.figma.com/api/mcp/asset/3aead53e-ab02-4475-aa80-359adc73e5bd.png";
const imgFotoUtamaArabicaGayo = "https://www.figma.com/api/mcp/asset/0ddae0c8-ff97-466d-b27f-fce8608f948e.png";
const imgFotoGaleri = "https://www.figma.com/api/mcp/asset/bc07b4a5-bf98-476a-8391-592318cf115e.png";
const imgFotoGaleri1 = "https://www.figma.com/api/mcp/asset/65c4136c-a1e0-4843-a21c-0cecb26b75ae.png";
const imgFotoGaleri2 = "https://www.figma.com/api/mcp/asset/3fd5547f-d990-4c31-9825-d9ee1fd9e8b8.png";
const imgFotoProduk = "https://www.figma.com/api/mcp/asset/677b25b5-dcb6-4dee-b810-6523983ee446.png";
const imgFotoProduk1 = "https://www.figma.com/api/mcp/asset/0c984b69-7dd6-4831-b2f5-b491dd34b7f7.png";
const imgFotoProduk2 = "https://www.figma.com/api/mcp/asset/1b1f6881-2798-4f0b-9f3b-a9d77f19183e.png";
const imgMenu = "https://www.figma.com/api/mcp/asset/68e8ab34-3394-4db4-aded-2fa49660736b.svg";

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

export default function DetailProdukMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="84:26120" data-name="Detail produk — Mobile">
      <div className="bg-white border-[#e3e6ed] border-b border-solid content-stretch flex flex-col gap-[14px] items-start overflow-clip px-[20px] py-[16px] relative shrink-0 w-full" data-node-id="84:26121" data-name="Navigasi pembeli">
        <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="84:26122" data-name="Identitas dan akun">
          <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:26123" data-name="Logo PASARIN">
            <div className="relative shrink-0 size-[32px]" data-node-id="84:26124" data-name="Simbol PASARIN">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSimbolPasarin} />
              </div>
            </div>
            <div className="h-[35px] relative shrink-0 w-[105px]" data-node-id="84:26125" data-name="Nama PASARIN">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNamaPasarin} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="84:26126" data-name="Menu pembeli">
            <div className="relative shrink-0 size-[22px]" data-node-id="84:27858" data-name="menu">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenu} />
            </div>
            <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="84:26128">
              Menu
            </p>
          </div>
        </div>
        <SearchBar className="bg-[#f8f9fe] content-stretch flex gap-[16px] h-[44px] items-end overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" placeholder="Cari produk atau toko" />
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start min-h-[580px] overflow-clip px-[20px] py-[24px] relative shrink-0 w-full" data-node-id="84:26135" data-name="Konten pembeli">
        <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:26136">{`Katalog / Makanan & minuman / Arabica Gayo`}</p>
        <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:26137" data-name="Detail produk">
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:26138" data-name="Galeri produk">
            <div className="h-[320px] relative rounded-[18px] shrink-0 w-full" data-node-id="84:26139" data-name="Foto utama Arabica Gayo">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgFotoUtamaArabicaGayo} />
            </div>
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:26140" data-name="Thumbnail galeri">
              <div className="border-2 border-[#006ffd] border-solid content-stretch flex flex-col items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 size-[78px]" data-node-id="84:26141" data-name="Thumbnail">
                <div className="flex-[1_0_0] min-h-px relative rounded-[7px] w-full" data-node-id="84:26142" data-name="Foto galeri">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7px] size-full" src={imgFotoUtamaArabicaGayo} />
                </div>
              </div>
              <div className="border border-[#e3e6ed] border-solid content-stretch flex flex-col items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 size-[78px]" data-node-id="84:26143" data-name="Thumbnail">
                <div className="flex-[1_0_0] min-h-px relative rounded-[7px] w-full" data-node-id="84:26144" data-name="Foto galeri">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
                    <img alt="" className="absolute h-full left-[0.71%] max-w-none top-[-26.14%] w-[100.32%]" src={imgFotoGaleri} />
                  </div>
                </div>
              </div>
              <div className="border border-[#e3e6ed] border-solid content-stretch flex flex-col items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 size-[78px]" data-node-id="84:26145" data-name="Thumbnail">
                <div className="flex-[1_0_0] min-h-px relative rounded-[7px] w-full" data-node-id="84:26146" data-name="Foto galeri">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
                    <img alt="" className="absolute h-full left-[0.37%] max-w-none top-[-24.71%] w-[100.32%]" src={imgFotoGaleri1} />
                  </div>
                </div>
              </div>
              <div className="border border-[#e3e6ed] border-solid content-stretch flex flex-col items-start overflow-clip p-[3px] relative rounded-[10px] shrink-0 size-[78px]" data-node-id="84:26147" data-name="Thumbnail">
                <div className="flex-[1_0_0] min-h-px relative rounded-[7px] w-full" data-node-id="84:26148" data-name="Foto galeri">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
                    <img alt="" className="absolute left-[-0.09%] max-w-none size-full top-[-25.42%]" src={imgFotoGaleri2} />
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#71727a] text-[14px] w-full" data-node-id="84:26149">
              Foto utama · 1 dari 4 foto
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:26150" data-name="Informasi produk">
            <div className="bg-[#eaf2ff] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="84:26151" data-name="Kategori produk">
              <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-node-id="I84:26151;101:204" data-name="Text">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="I84:26151;6:2244">{`Makanan & minuman`}</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.18] min-w-full not-italic relative shrink-0 text-[#1f2024] text-[28px] w-[min-content]" data-node-id="84:26160">
              Arabica Gayo
            </p>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[#006ffd] text-[32px] w-[min-content]" data-node-id="84:26161">
              Rp65.000
            </p>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 text-[#1f2024] w-full" data-node-id="84:26162" data-name="Deskripsi produk">
              <p className="font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[18px] whitespace-nowrap" data-node-id="84:26163">
                Tentang produk
              </p>
              <p className="font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[16px] w-[min-content]" data-node-id="84:26164">
                Lahir dari tanah pegunungan tinggi Aceh Tengah, Arabica Gayo menghadirkan cita rasa klasik yang kaya, seimbang, dan berkarakter kuat. Ditanam secara organik di atas ketinggian 1.200–1.500 mdpl, setiap bijinya memetik nutrisi alami tanah vulkanis untuk menciptakan cangkir kopi yang intens namun tetap lembut di mulut.
              </p>
            </div>
            <div className="bg-[#f8f9fe] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[15px] shrink-0 w-full" data-node-id="84:26165" data-name="Ringkasan toko">
              <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:26166" data-name="Identitas toko">
                <div className="bg-[#e5eae0] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[64px]" data-node-id="84:26167" data-name="Logo toko">
                  <p className="[word-break:break-word] font-['Lora:Regular'] font-normal leading-[normal] relative shrink-0 text-[#52624b] text-[25.6px] tracking-[-2px] whitespace-nowrap" data-node-id="84:26168">
                    dsc.
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.5] min-w-px overflow-clip relative text-[14px]" data-node-id="84:26169" data-name="Nama dan lokasi">
                  <p className="font-['Arimo:Bold'] font-bold relative shrink-0 text-[#1f2024] w-full" data-node-id="84:26170">
                    Dikala Senja Cafe
                  </p>
                  <p className="font-['Arimo:Regular'] font-normal relative shrink-0 text-[#71727a] w-full" data-node-id="84:26171">
                    Sari Wulandari · Jakarta Selatan
                  </p>
                </div>
              </div>
              <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26172" data-name="Tombol/Sekunder">
                <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26172;6:885">
                  Lihat Toko
                </p>
              </div>
            </div>
            <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26180" data-name="Tombol/Utama">
              <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I84:26180;6:788">
                Hubungi melalui WhatsApp
              </p>
            </div>
            <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#71727a] text-[14px] w-[min-content]" data-node-id="84:26188">
              +62 812 3456 7890 · Tanyakan ketersediaan dan pemesanan langsung kepada toko. Tidak perlu masuk.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="84:26189" data-name="Produk toko lainnya">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[1.18] not-italic relative shrink-0 text-[#1f2024] text-[28px] w-full" data-node-id="84:26190">
            Lainnya dari Dikala Senja Cafe
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="84:26191" data-name="Katalog produk">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:26192" data-name="Baris produk">
              <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26193" data-name="Kartu produk">
                <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:26194" data-name="Foto produk">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[132.29%] left-0 max-w-none top-[-32.39%] w-full" src={imgFotoProduk} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:26195" data-name="Informasi produk">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:26196">
                    Pure Matcha
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:26197">
                    Matcha · Jakarta
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:26198">
                    Rp13.000
                  </p>
                  <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26199" data-name="Tombol/Sekunder">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26199;6:885">
                      Lihat detail
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26207" data-name="Kartu produk">
                <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:26208" data-name="Foto produk">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk1} />
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:26209" data-name="Informasi produk">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:26210">
                    Kopi Susu Sahabat
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:26211">
                    Kopi susu · Jakarta
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:26212">
                    Rp15.000
                  </p>
                  <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26213" data-name="Tombol/Sekunder">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26213;6:885">
                      Lihat detail
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="84:26221" data-name="Baris produk">
              <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[15px] self-stretch shadow-[0px_3px_8px_0px_rgba(31,46,71,0.06)]" data-node-id="84:26222" data-name="Kartu produk">
                <div className="h-[150px] relative shrink-0 w-full" data-node-id="84:26223" data-name="Foto produk">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotoProduk2} />
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-node-id="84:26224" data-name="Informasi produk">
                  <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[1.4] min-h-[42px] relative shrink-0 text-[#1f2024] text-[14px] w-full" data-node-id="84:26225">
                    Orange Juice
                  </p>
                  <p className="[word-break:break-word] font-['Arimo:Regular'] font-normal leading-[1.5] min-h-[36px] relative shrink-0 text-[#71727a] text-[12px] w-full" data-node-id="84:26226">
                    Jus jeruk botol · Jakarta
                  </p>
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[18px] w-full" data-node-id="84:26227">
                    Rp15.000
                  </p>
                  <div className="border-[#006ffd] border-[1.5px] border-solid content-stretch flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:26228" data-name="Tombol/Sekunder">
                    <p className="[word-break:break-word] font-['Arimo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[14px] whitespace-nowrap" data-node-id="I84:26228;6:885">
                      Lihat detail
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="84:26236" data-name="Ruang grid" />
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] bg-[#f8f9fe] content-stretch flex flex-col gap-[14px] items-start not-italic overflow-clip px-[20px] py-[28px] relative shrink-0 w-full" data-node-id="84:26237" data-name="Kaki halaman">
        <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-node-id="84:26238" data-name="Pesan PASARIN">
          <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#006ffd] text-[22px] whitespace-nowrap" data-node-id="84:26239">
            pasarin
          </p>
          <p className="flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px relative text-[#71727a] text-[14px]" data-node-id="84:26240">
            Temukan lokal. Dukung usaha Indonesia.
          </p>
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[16px] relative shrink-0 text-[#71727a] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="84:26241">
          © 2026 PASARIN. Untuk usaha lokal Indonesia.
        </p>
      </div>
      <div className="absolute bg-[#006ffd] h-px left-0 opacity-35 top-[843px] w-[390px]" data-node-id="84:26242" data-name="Batas viewport awal" />
    </div>
  );
}
