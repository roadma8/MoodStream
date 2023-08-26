export function isValidPort(port: string | number | undefined) {
  if (typeof port === "string") {
    const parsedPort = parseInt(port, 10);

    if (!isNaN(parsedPort)) {
      port = parsedPort;
    } else {
      port = undefined;
    }
  }

  return typeof port === "number" && port >= 1 && port <= 65535;
}
