
// import { MathUtilService } from '../services/mathUtil.service';
// import * as moment from "moment";
// export class UtilService {

//   static jsonToUrlEncode(data) {
//     return Object.keys(data).map((key) => {
//       return encodeURIComponent(key)
//         + '=' + encodeURIComponent(data[key]);
//     }).join('&')
//   }

//   static copyToClipBoard(dataToCopy) {
//     document.addEventListener('copy', (e: ClipboardEvent) => {
//       e.clipboardData.setData('text/plain', (dataToCopy));
//       e.preventDefault();
//       document.removeEventListener('copy', null);
//     });
//     document.execCommand('copy');
//   }

//   static pdfToHtml() {
//     window.print()
//   }

//   static jsonToArray(json) {
//     var result = [];
//     for (let i in json) {
//       result.push(json[i])
//     }
//     return result
//   }

//   prettifyToString(obj: any) {
//     return JSON.stringify(obj, null, 4);
//   }

//   isNumber(obj: any) {
//     return isNaN(obj);
//   }

//   static calulateDsAfterPr(unitPrice: number, pr: number) {
//     const multiply = MathUtilService.safeMultiply(unitPrice, pr);
//     const divide = MathUtilService.safeDivide(multiply, 100);
//     const subtract = MathUtilService.safeSubtract(unitPrice, divide);
//     return subtract;
//   }

//   static pricePercentageCalculation(event: any, unitPrice: number, xIndex: number, yIndex: number, array: Array<any>) {
//     event = isNaN(event) ? "" : Math.abs(event);
//     if (array && array[xIndex]["discountDivision"] && array[xIndex]["discountDivision"][yIndex]) {
//       array[xIndex]["discountDivision"][yIndex]["percentage"] = event || 0;
//       unitPrice = +unitPrice;
//       if (array[xIndex]["discountDivision"].length) {
//         for (var i = yIndex - 1; i >= 0; i--) {
//           if (typeof array[xIndex]["discountDivision"][i]["price"] == "object") {
//             unitPrice = array[xIndex]["discountDivision"][i]["price"];
//             break;
//           }
//         }
//       }
//       if (
//         array[xIndex]["discountDivision"].length &&
//         !(yIndex + 1 == array[xIndex]["discountDivision"].length) &&
//         array[xIndex]["discountDivision"][yIndex + 1]["price"]
//       ) {
//         for (var i = yIndex; i < array[xIndex]["discountDivision"].length; i++) {
//           if (typeof array[xIndex]["discountDivision"][i]["price"] == "object") {
//             const ModifiedCalculation: any = UtilService.calulateDsAfterPr(
//               array[xIndex]["discountDivision"][i - 1] ? array[xIndex]["discountDivision"][i - 1]["price"] : unitPrice,
//               array[xIndex]["discountDivision"][i]["percentage"]
//             );
//             array[xIndex]["discountDivision"][i]["price"] = isNaN(ModifiedCalculation)
//               ? UtilService.calulateDsAfterPr(
//                 array[xIndex]["discountDivision"][i]["price"],
//                 array[xIndex]["discountDivision"][i]["percentage"]
//               )
//               : ModifiedCalculation;
//           }
//         }
//       }
//       const finalCalculation: any = UtilService.calulateDsAfterPr(
//         unitPrice,
//         event
//       );
//       array[xIndex]["discountDivision"][yIndex]["price"] = isNaN(finalCalculation)
//         ? ""
//         : finalCalculation;
//     }

//     return array;
//   }

//   static tableHeaderCalculation(array: Array<any>, info = false) {
//     //cleanup everything
//     let largest = 0;
//     if (info) {
//       if (array["items"].length) {
//         array["items"].map((item, i) => {
//           if (item.discountDivision && item.discountDivision.length) {
//             item.discountDivision.map((_subItem: any, j: any) => {
//               if (array["items"][i].discountDivision.length > largest) {
//                 largest = array["items"][i].discountDivision.length;
//               }
//             });
//           }
//         });
//       }
//       if (array["items"].length) {
//         array["items"].map((item, _index) => {
//           if (item.discountDivision.length < largest) {
//             for (let i = item.discountDivision.length; i < largest; i++) {
//               item.discountDivision.push({
//                 percentage: '--',
//                 price: '--',
//                 year: '--',
//                 tn: '--'
//               });
//             }
//           }
//         });
//       }
//     } else {
//       if (array.length) {
//         array.map((item, i) => {
//           if (item.discountDivision && item.discountDivision.length) {
//             const endTenure = array[i]["tenure"]
//             item.discountDivision.map((subItem, j) => {
//               array[i]["discountDivision"] = array[i]["discountDivision"].filter(function (el) {
//                 return (!isNaN(el.tn) && el.tn <= endTenure);
//               });
//             });
//             // remove duplicates
//             array[i]["discountDivision"] = array[i]["discountDivision"].filter((thing, index) => {
//               return index === array[i]["discountDivision"].findIndex(obj => {
//                 return obj.year === thing.year;
//               });
//             });
//           }
//         });
//       }
//       if (array.length) {
//         array.map((item, i) => {
//           if (item.discountDivision && item.discountDivision.length) {
//             item.discountDivision.map((subItem, j) => {
//               if (array[i]["discountDivision"].length > largest) {
//                 largest = array[i]["discountDivision"].length;
//               }
//             });
//           }
//         });
//       }
//       if (array.length) {
//         array.map((item, index) => {
//           if (item.discountDivision) {
//             if (item.discountDivision.length < largest) {
//               for (let i = item.discountDivision.length; i < largest; i++) {
//                 item.discountDivision.push({
//                   percentage: '--',
//                   price: '--',
//                   year: '--',
//                   tn: '--'
//                 });
//               }
//             }
//           }
//         });
//       }
//     }

//     return {
//       array,
//       largest
//     }
//   }

//   static tenureCalculation(start: any, end: any, itemIndex: number, array: Array<any>) {
//     start = moment(start)
//     end = moment(end)
//     let tenure = end.diff(start, "years", true);
//     tenure = tenure < 0 ? 0 : Math.ceil(tenure);
//     if (!isNaN(tenure)) {
//       array[itemIndex]["tenure"] = `${tenure}`;

//       const startInfo = (new Date(start)).getFullYear()

//       if (!array[itemIndex]["discountDivision"]) {
//         array[itemIndex]["discountDivision"] = [];
//       } else {
//         array[itemIndex]["discountDivision"] = array[itemIndex]["discountDivision"].filter(function (el) {
//           return (!isNaN(el.tn) && parseInt(el.tn) <= tenure);
//         });
//       }

//       if (tenure > 1) {
//         for (let i = 2; i <= tenure; i++) {
//           array[itemIndex]["discountDivision"].push({
//             percentage: "",
//             price: "",
//             year: (startInfo + i - 1).toString(),
//             tn: i
//           });
//         }

//         // remove duplicates
//         array[itemIndex]["discountDivision"] = array[itemIndex]["discountDivision"].filter((thing, index) => {
//           return index === array[itemIndex]["discountDivision"].findIndex(obj => {
//             return obj.year === thing.year;
//           });
//         });
//       }
//     }

//     return array
//   }

//   static downLoadCSV(data: any, fileName: string) {

//     const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });

//     const link = document.createElement('a');
//     if (link.download !== undefined) {
//       const url = URL.createObjectURL(blob);
//       link.setAttribute('href', url);
//       link.setAttribute('download', fileName);
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   }

//   static downLoadFile(data: any, type: string, fileName) {
//     let blob = new Blob([data], { type: type });
//     let url = window.URL.createObjectURL(blob);
//     let a = document.createElement("a");
//     a.href = url;
//     a.download = fileName;
//     a.click();
//     setTimeout(() => {
//       window.URL.revokeObjectURL(url);
//     }, 0)
//   }

//   onlyNumberKey(event) {
//     return event.charCode == 8 || event.charCode == 0
//       ? null
//       : event.charCode >= 48 && event.charCode <= 57;
//   }

//   withDecimalNumberKey(event) {
//     return event.charCode == 8 || event.charCode == 0
//       ? null
//       : event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46;
//   }

// }