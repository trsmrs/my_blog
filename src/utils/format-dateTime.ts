import { format, formatDistanceToNow, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

export function parseAPIDate(dateString: string): Date {
  // Limpa a parte tipo " - há X meses"
  const cleanDateString = dateString.split(" - ")[0].trim();

  // 1. Formato ISO (incluindo com milissegundos e "Z")
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z)?$/.test(cleanDateString)) {
    const isoDate = new Date(cleanDateString);
    if (!isNaN(isoDate.getTime())) {
      return isoDate;
    }
  }

  // 2. Formato curto brasileiro (ex: 08/03/2025 às 13h13)
  const shortFormatMatch = cleanDateString.match(/(\d{2})\/(\d{2})\/(\d{4}) às (\d{2})h(\d{2})/);
  if (shortFormatMatch) {
    const [, day, month, year, hours, minutes] = shortFormatMatch;
    const parsed = parse(`${day}/${month}/${year} ${hours}:${minutes}`, "dd/MM/yyyy HH:mm", new Date(), { locale: ptBR });
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  // 3. Formato longo por extenso (ex: 08 de março de 2025 às 13:13)
  const longFormatMatch = cleanDateString.match(/(\d{1,2}) de ([a-zçãé]+) de (\d{4}) às (\d{2}):(\d{2})/i);
  if (longFormatMatch) {
    const [, day, monthName, year, hours, minutes] = longFormatMatch;
    const parsed = parse(`${day} de ${monthName} de ${year} ${hours}:${minutes}`, "d 'de' MMMM 'de' yyyy HH:mm", new Date(), { locale: ptBR });
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  throw new Error(`Formato de data inválido: ${dateString}`);
}

export function formatDateTime(dateString: string): string {
  try {
    const date = parseAPIDate(dateString);
    return format(date, "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR });
  } catch (error) {
    console.error("Error formatting date:", error, "Original value:", dateString);
    return dateString;
  }
}

export function formatRelativeDate(dateString: string): string {
  try {
    const date = parseAPIDate(dateString);
    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    });
  } catch (error) {
    console.error("Error formatting relative date:", error, "Original value:", dateString);
    return "";
  }
}
