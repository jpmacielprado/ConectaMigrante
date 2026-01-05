/**
 * Função para gerar e abrir links do WhatsApp.
 * @param {string} phone - O número de telefone (com DDD, ex: 11999999999).
 * @param {string} message - A mensagem inicial opcional.
 */
export const openWhatsApp = (phone, message = "") => {
  // 1. Remove caracteres não numéricos (espaços, parênteses, traços)
  const cleanPhone = phone.replace(/\D/g, "");

  // 2. Garante que o código do país (55 para Brasil) esteja presente
  const finalPhone = cleanPhone.length <= 11 ? `55${cleanPhone}` : cleanPhone;

  // 3. Codifica a mensagem para formato de URL (troca espaços por %20, etc)
  const encodedMessage = encodeURIComponent(message);

  // 4. Monta o link final
  const url = `https://wa.me/${finalPhone}?text=${encodedMessage}`;

  // 5. Abre em uma nova aba do navegador
  window.open(url, "_blank");
};