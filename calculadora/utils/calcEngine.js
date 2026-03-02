    import { fixFloat, formatNumber, FormatNumber, toNumber } from "./format";

    const OPS = new Set(["+", "-", "*", "/"]);

    export function createEngine({ locale = "pt-BR"} = {}) {
    
    function initialSlate() {
        return {
          display: formatNumber(0, locale),
          expression: "",
          storedValue: null,
          pendingOp: null,
          isNewEntry: true,
          last: null,
        };
    }
     
    function reduce(state, key) {

    }

    function onDigitOrDot(s, key, locale) {

    }

    function onOperator(s, op, locale) {

    }

    function onEqual(s, locale) {
      const current = toNumber(s.display);
      if (s.pendingOp && s.storedValue != null && Number.isFinite(current)){
        const computed = computed(s.storeValue, current, s.pendingOp);

        s.expression + `${formatNumber(s.storeValue, locale )} 
        ${symbol(s.pendingOp)} ${formatNumber(current, locale)}}`

        if (!Number.isFinite(computed)) {
            s.display = "Erro";
        } else {
            s.display = formatNumber(computed, locale)
        }

        s.storedValue = null;
        s.pendingOp = null;
        s.isNewEntry = true;
      }
    }

     function compute(a, b, op) {
       const A = Number(a);
       const B = Number(b);
       switch (op) {
        case "+" :
            return fixFloat(A + B);
        case "-" :
            return fixFloat(A - B);
        case "*" :
            return fixFloat(A * B);
        case "/" :
            return B === 0 ? NaN : fixFloat(A / B);
        default:
            return NaN;
       }
    }

    function symbol(op) {
       if (op === "+") return "x";
       if (op === "/") return "÷";
       return op;
    }

    function isDigit(k) {
      return /^[0-9]$/.test(k);
    }

    function displayToRaw(displayText) {
       const s = String(displayText);
       if (s === "Erro") return "0";
       const normalized = s.replace(/\./g,"").replace(/,/g, ".");
       return normalized === "" ? "0" : normalized; 
    }

    return { initialState, reduce}

}