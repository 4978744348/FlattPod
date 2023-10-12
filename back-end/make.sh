#!/bin/bash
scp -i "D:\FLATTPOD\flattpod.pem" "D:\FLATTPOD\test\FlattPod\back-end\.env" ec2-user@54.175.180.114:/home/ec2-user/FlattPod/back-end
scp -i "D:\FLATTPOD\flattpod.pem" "D:\FLATTPOD\test\FlattPod\back-end\package-lock.json" ec2-user@54.175.180.114:/home/ec2-user/FlattPod/back-end
scp -i "D:\FLATTPOD\flattpod.pem" "D:\FLATTPOD\test\FlattPod\back-end\package.json" ec2-user@54.175.180.114:/home/ec2-user/FlattPod/back-end
scp -r -i "D:\FLATTPOD\flattpod.pem" "D:\FLATTPOD\test\FlattPod\back-end\out" ec2-user@54.175.180.114:/home/ec2-user/FlattPod/back-end
scp -r -i "D:\FLATTPOD\flattpod.pem" "D:\FLATTPOD\test\FlattPod\back-end\db" ec2-user@54.175.180.114:/home/ec2-user/FlattPod/back-end
scp -i "D:\FLATTPOD\flattpod.pem" "D:\FLATTPOD\test\FlattPod\back-end\docker-compose.yml" ec2-user@54.175.180.114:/home/ec2-user/FlattPod/back-end
scp -i "D:\FLATTPOD\flattpod.pem" "D:\FLATTPOD\test\FlattPod\back-end\Dockerfile" ec2-user@54.175.180.114:/home/ec2-user/FlattPod/back-end
scp -i "D:\FLATTPOD\flattpod.pem" "D:\FLATTPOD\test\FlattPod\back-end\env.json" ec2-user@54.175.180.114:/home/ec2-user/FlattPod/back-end
