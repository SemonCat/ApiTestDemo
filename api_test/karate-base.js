function fn() {
  // don't waste time waiting for a connection or if servers don't respond within 5 seconds
  karate.configure('connectTimeout', 10 * 1000);
  karate.configure('readTimeout', 10 * 1000);

  karate.configure('logPrettyRequest', true);
  karate.configure('logPrettyResponse', true);
  return {
  };
}
