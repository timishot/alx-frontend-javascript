export default function iterateThroughObject(reportWithIterator) {
    const result = [];
    for (const employeeName of reportWithIterator) {
      result.push(employeeName);
    }
    return result.join(' | ');
  }
  