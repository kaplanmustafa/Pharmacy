import React from "react";

const Provinces = (props) => {
  const { onChangeProvince } = props;

  return (
    <div className="mt-5 w-25 mx-auto">
      <select className="form-control" onChange={onChangeProvince}>
        <option>İL SEÇİNİZ</option>
        <option>ADANA</option>
        <option>ADIYAMAN</option>
        <option>AFYONKARAHİSAR</option>
        <option>AĞRI</option>
        <option>AMASYA</option>
        <option>ANKARA</option>
        <option>ANTALYA</option>
        <option>ARTVİN</option>
        <option>AYDIN</option>
        <option>BALIKESİR</option>
        <option>BİLECİK</option>
        <option>BİNGÖL</option>
        <option>BİTLİS</option>
        <option>BOLU</option>
        <option>BURDUR</option>
        <option>BURSA</option>
        <option>ÇANAKKALE</option>
        <option>ÇANKIRI</option>
        <option>ÇORUM</option>
        <option>DENİZLİ</option>
        <option>DİYARBAKIR</option>
        <option>EDİRNE</option>
        <option>ELAZIĞ</option>
        <option>ERZİNCAN</option>
        <option>ERZURUM</option>
        <option>ESKİŞEHİR</option>
        <option>GAZİANTEP</option>
        <option>GİRESUN</option>
        <option>GÜMÜŞHANE</option>
        <option>HAKKARİ</option>
        <option>HATAY</option>
        <option>ISPARTA</option>
        <option>MERSİN</option>
        <option>İSTANBUL</option>
        <option>İZMİR</option>
        <option>KARS</option>
        <option>KASTAMONU</option>
        <option>KAYSERİ</option>
        <option>KIRKLARELİ</option>
        <option>KIRŞEHİR</option>
        <option>KOCAELİ</option>
        <option>KONYA</option>
        <option>KÜTAHYA</option>
        <option>MALATYA</option>
        <option>MANİSA</option>
        <option>KAHRAMANMARAŞ</option>
        <option>MARDİN</option>
        <option>MUĞLA</option>
        <option>MUŞ</option>
        <option>NEVŞEHİR</option>
        <option>NİĞDE</option>
        <option>ORDU</option>
        <option>RİZE</option>
        <option>SAKARYA</option>
        <option>SAMSUN</option>
        <option>SİİRT</option>
        <option>SİNOP</option>
        <option>SİVAS</option>
        <option>TEKİRDAĞ</option>
        <option>TOKAT</option>
        <option>TRABZON</option>
        <option>TUNCELİ</option>
        <option>ŞANLIURFA</option>
        <option>UŞAK</option>
        <option>VAN</option>
        <option>YOZGAT</option>
        <option>ZONGULDAK</option>
        <option>AKSARAY</option>
        <option>BAYBURT</option>
        <option>KARAMAN</option>
        <option>KIRIKKALE</option>
        <option>BATMAN</option>
        <option>ŞIRNAK</option>
        <option>BARTIN</option>
        <option>ARDAHAN</option>
        <option>IĞDIR</option>
        <option>YALOVA</option>
        <option>KARABÜK</option>
        <option>KİLİS</option>
        <option>OSMANİYE</option>
        <option>DÜZCE</option>
      </select>
    </div>
  );
};

export default Provinces;
