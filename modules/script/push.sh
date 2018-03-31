MAC_ADDRESS=$1

expect -c "
    spawn gatttool -b $MAC_ADDRESS -t random -I
    expect \"LE\"
    send -- \"connect\n\"
    expect \"successful\"
    expect \"LE\"
    send -- \"char-write-cmd 0x0016 570100\n\"
    expect \"LE\"
    send -- \"quit\"
"
