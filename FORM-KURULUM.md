# İletişim Formu Kurulum Rehberi

## FormSubmit Aktivasyonu

İletişim formu **FormSubmit.co** servisi üzerinden `bodrumatlasyonetim@gmail.com` adresine mail gönderecek şekilde ayarlandı.

### İlk Kurulum (Tek Seferlik)

FormSubmit'in çalışması için **ilk aktivasyon** gereklidir:

1. **Siteyi yayınlayın** (hosting'e upload edin)
2. **İletişim sayfasına** gidin (`iletisim.html`)
3. **Test formu gönderin** (herhangi bir bilgi ile)
4. FormSubmit, `bodrumatlasyonetim@gmail.com` adresine **doğrulama maili** gönderecek
5. **Maildeki linke tıklayın** (Confirm your email)
6. Aktivasyon tamamlandı! ✅

### Aktivasyon Sonrası

Aktivasyondan sonra:
- Tüm form gönderimleri otomatik olarak `bodrumatlasyonetim@gmail.com` adresine gelecek
- Kullanıcılara otomatik teşekkür maili gönderilecek
- Form verileri düzenli tablo formatında gelecek

## Form Özellikleri

✅ **Spam koruması**: Honeypot field ile bot koruması aktif  
✅ **Otomatik yanıt**: Kullanıcılara teşekkür maili gönderilir  
✅ **Konu satırı**: "Bodrum Atlas - Yeni İletişim Formu"  
✅ **Tablo formatı**: Gelen mailler düzenli tablo halinde  
✅ **Validasyon**: JS ile zorunlu alanlar kontrol edilir  

## Önemli Notlar

- FormSubmit ücretsiz ve güvenilir bir servistir
- Aylık 50 form gönderimi ücretsizdir (yeterli)
- Daha fazla gerekirse premium plan alınabilir
- Form verileri FormSubmit serverlarından geçer (güvenli)

## Sorun Giderme

**Form çalışmıyor mu?**
1. Aktivasyon mailini kontrol edin
2. Spam klasörünü kontrol edin
3. FormSubmit doğrulama linkine tıkladığınızdan emin olun

**Mailler gelmiyor mu?**
- Gmail spam filtresini kontrol edin
- FormSubmit'ten gelen aktivasyon mailini doğruladığınızdan emin olun

## Alternatif Email Adresi

Email adresini değiştirmek için:
1. `iletisim.html` dosyasını açın
2. Form action'daki email adresini değiştirin:
   ```html
   action="https://formsubmit.co/YENI-EMAIL@example.com"
   ```
3. Yeni email için aktivasyonu tekrarlayın

---

**Hazırlayan**: Bodrum Atlas Site Yönetim  
**Tarih**: Aralık 2025

