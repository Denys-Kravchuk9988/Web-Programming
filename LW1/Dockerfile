FROM ubuntu:22.04

RUN apt update && apt install -y bind9-dnsutils bash

COPY lab_1.sh /lab_1.sh
RUN chmod +x /lab_1.sh

CMD ["/lab_1.sh"]